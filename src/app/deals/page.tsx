"use client"

import * as React from "react"
import { Filter, SlidersHorizontal, Search, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { DealCard } from "@/components/deals/deal-card"
import { DealModal } from "@/components/deals/deal-modal"
import { type Deal } from "@/components/deals/types"
import { useDeals, FilterState, SortOption } from "@/lib/use-deals"

export default function DealsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [debouncedSearchQuery, setDebouncedSearchQuery] = React.useState("")
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [priceRange, setPriceRange] = React.useState([0, 150000])
  const [onlyVerified, setOnlyVerified] = React.useState(false)
  const [sortBy, setSortBy] = React.useState<SortOption>("featured")
  
  const [selectedDeal, setSelectedDeal] = React.useState<Deal | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // Debounce search
  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchQuery(searchQuery), 400)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const filters: FilterState = React.useMemo(() => ({
    search: debouncedSearchQuery,
    platform: selectedPlatforms,
    category: selectedCategories,
    verifiedOnly: onlyVerified
  }), [debouncedSearchQuery, selectedPlatforms, selectedCategories, onlyVerified])

  const { deals, isLoading } = useDeals(filters, sortBy)

  // Apply price range locally (since SWR hook mocked version didn't have price range for brevity, but let's just filter locally here)
  const finalDeals = React.useMemo(() => {
    if (!deals) return []
    return deals.filter(d => d.currentPrice >= priceRange[0] && d.currentPrice <= priceRange[1])
  }, [deals, priceRange])

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const clearFilters = () => {
    setSelectedPlatforms([])
    setSelectedCategories([])
    setPriceRange([0, 150000])
    setOnlyVerified(false)
    setSearchQuery("")
  }

  const activeFilterCount = selectedPlatforms.length + selectedCategories.length + (onlyVerified ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 150000 ? 1 : 0)

  const FilterSidebarContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4 text-foreground/90">Platform</h3>
        <div className="space-y-3">
          {["Amazon", "Flipkart", "Myntra", "Shopsy"].map(platform => (
            <div key={platform} className="flex items-center space-x-3">
              <Checkbox 
                id={`platform-${platform}`} 
                checked={selectedPlatforms.includes(platform)}
                onCheckedChange={() => togglePlatform(platform)}
                className="rounded border-border/50 bg-background/50 backdrop-blur-sm"
              />
              <label htmlFor={`platform-${platform}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                {platform}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-foreground/90">Category</h3>
        <div className="space-y-3">
          {["Electronics", "Fashion", "Home & Kitchen", "Beauty"].map(category => (
            <div key={category} className="flex items-center space-x-3">
              <Checkbox 
                id={`cat-${category}`} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
                className="rounded border-border/50 bg-background/50 backdrop-blur-sm"
              />
              <label htmlFor={`cat-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-foreground/90">Price Range (₹)</h3>
        <Slider
          defaultValue={[0, 150000]}
          max={150000}
          step={1000}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
          <span>₹{priceRange[0].toLocaleString()}</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-foreground/90">Quality</h3>
        <div className="flex items-center space-x-3 bg-secondary/50 p-4 rounded-xl backdrop-blur-sm border border-border/50">
          <Checkbox 
            id="verified" 
            checked={onlyVerified}
            onCheckedChange={(checked) => setOnlyVerified(!!checked)}
            className="rounded border-border/50"
          />
          <label htmlFor="verified" className="text-sm font-semibold leading-none text-foreground">
            ShoppinGenie Verified Only
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex-1 min-h-screen pb-12 relative z-10 bg-transparent">
      {/* Glass Top Bar */}
      <div className="sticky top-[64px] z-40 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg tracking-tight">Discovery Feed</span>
            <div className="h-4 w-px bg-border mx-1 hidden sm:block" />
            <span className="text-sm font-medium text-muted-foreground hidden sm:block">
              {isLoading ? "Analyzing deals..." : `${finalDeals.length} Deals`}
            </span>
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-2 font-semibold">
                {activeFilterCount} Filters
              </Badge>
            )}
            {activeFilterCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-7 px-3 rounded-full text-muted-foreground hover:text-foreground">
                Clear
              </Button>
            )}
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-[var(--accent-magic)] transition-colors" />
              <Input 
                placeholder="Search products..." 
                className="pl-9 h-10 text-sm bg-muted/50 border-transparent rounded-full hover:bg-muted focus-visible:ring-[var(--accent-magic)] focus-visible:bg-background transition-all"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="hidden sm:flex items-center gap-2 text-sm bg-muted/50 rounded-full px-4 h-10 border border-border/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[var(--accent-magic)]/40 transition-all">
              <span className="text-muted-foreground font-medium">Sort:</span>
              <select 
                className="bg-transparent border-none outline-none focus:ring-0 text-sm font-bold text-foreground cursor-pointer"
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortOption)}
              >
                <option value="featured">Featured Intelligence</option>
                <option value="newest">Latest Drops</option>
                <option value="discount_desc">Best Discount</option>
                <option value="price_asc">Price: Low to High</option>
              </select>
            </div>

            {/* Mobile Filter Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="h-10 rounded-full sm:hidden flex gap-2 border-border/50 bg-background/50 backdrop-blur-sm hover:border-[var(--accent-magic)] transition-colors">
                  <Filter className="h-4 w-4" /> Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl overflow-y-auto">
                <SheetHeader className="mb-6 mt-2">
                  <SheetTitle className="text-left">Refine Search</SheetTitle>
                  <SheetDescription className="text-left">Use filters to find exact deals.</SheetDescription>
                </SheetHeader>
                <FilterSidebarContent />
                <div className="mt-8 border-t pt-6 pb-6">
                  <span className="text-muted-foreground text-sm font-bold block mb-3">Sort By:</span>
                  <select 
                    className="w-full h-12 bg-muted/50 border border-border/50 rounded-xl px-4 outline-none text-sm font-bold focus:ring-2 focus:ring-[var(--accent-magic)] transition-all"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as SortOption)}
                  >
                    <option value="featured">Featured Intelligence</option>
                    <option value="newest">Latest Drops</option>
                    <option value="discount_desc">Best Discount</option>
                    <option value="price_asc">Price: Low to High</option>
                  </select>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar (Glass) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-[150px] glass-panel p-6 rounded-[2rem]">
              <div className="flex items-center gap-2 mb-8 text-lg font-black tracking-tight text-foreground">
                <SlidersHorizontal className="h-5 w-5 text-[var(--accent-magic)]" /> Filter Engine
              </div>
              <FilterSidebarContent />
            </div>
          </aside>

          {/* Main Feed */}
          <main className="flex-1 min-w-0">
            {isLoading && !deals ? (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <h3 className="text-lg font-bold">Analyzing market data...</h3>
              </div>
            ) : finalDeals.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence>
                  {finalDeals.map(deal => (
                    <motion.div
                      key={deal.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DealCard 
                        deal={deal} 
                        onClick={(d) => {
                          setSelectedDeal(d)
                          setIsModalOpen(true)
                        }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-32 text-center glass-panel rounded-[2rem]"
              >
                <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-black mb-2">No deals found</h3>
                <p className="text-muted-foreground mb-8 max-w-md text-lg">
                  Our intelligence engine couldn't find any active deals matching your exact filters.
                </p>
                <Button size="lg" className="rounded-xl px-8" onClick={clearFilters}>Reset All Filters</Button>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      <DealModal 
        deal={selectedDeal} 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  )
}
