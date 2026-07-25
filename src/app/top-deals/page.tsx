"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { FeaturedDeal } from "@/components/deals/featured-deal"
import { RankedDealItem } from "@/components/deals/ranked-deal-item"
import { MOCK_DEALS } from "@/app/deals/data"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function TopDealsPage() {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null)

  // Quick filters combining categories and platforms
  const filters = ["All", "Electronics", "Fashion", "Home & Kitchen", "Amazon", "Flipkart", "Myntra"]

  // Determine active filter state
  const currentFilter = activeFilter === "All" ? null : activeFilter

  // Mock processing of data for sections
  // Featured Deal (Deal of the day)
  const featuredDeal = MOCK_DEALS.reduce((prev, current) => 
    (prev.discountPercentage > current.discountPercentage) ? prev : current
  )

  // Helper to filter deals based on selected quick filter
  const applyFilter = (deals: typeof MOCK_DEALS) => {
    if (!currentFilter) return deals
    return deals.filter(d => d.category === currentFilter || d.platform === currentFilter)
  }

  // Section 1: Top Savings (ordered by highest discount)
  const topSavings = applyFilter([...MOCK_DEALS])
    .filter(d => d.id !== featuredDeal.id)
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 3)

  // Section 2: Trending Now
  const trendingNow = applyFilter([...MOCK_DEALS])
    .filter(d => d.id !== featuredDeal.id && !topSavings.find(t => t.id === d.id))
    .slice(0, 3)

  return (
    <div className="flex-1 bg-transparent pb-20 relative z-10">
      
      {/* Editorial Header */}
      <section className="pt-24 pb-16 border-b border-border/50 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center md:text-left"
          >
            <motion.h4 variants={fadeUp} className="text-[var(--accent-magic)] font-bold tracking-widest uppercase text-sm mb-4">The ShoppinGenie Edit</motion.h4>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-foreground">
              Today's Top Deals
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Our AI scours millions of products daily to curate this definitive list of the absolute best value offers available right now.
            </motion.p>
          </motion.div>

          {/* Quick Filters */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-12 flex overflow-x-auto pb-4 gap-3 snap-x hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`snap-start whitespace-nowrap px-6 py-2.5 rounded-2xl text-sm font-bold transition-all border shadow-sm ${
                  (activeFilter === filter || (filter === "All" && !activeFilter))
                    ? "bg-foreground text-background border-foreground shadow-[var(--accent-magic)]/20 shadow-lg"
                    : "bg-card text-card-foreground hover:bg-secondary hover:border-[var(--accent-glow)]/50 border-border"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16 space-y-24">
        
        {/* Deal of the Day */}
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <FeaturedDeal deal={featuredDeal} />
        </motion.section>

        {/* Top Savings Section */}
        {topSavings.length > 0 && (
          <section>
            <div className="mb-10 border-b border-border/50 pb-6">
              <h2 className="text-3xl font-black tracking-tight">Top Savings</h2>
              <p className="text-muted-foreground mt-2 text-lg">The deepest discounts verified across all platforms today.</p>
            </div>
            
            <div className="space-y-6">
              {topSavings.map((deal, index) => (
                <RankedDealItem key={deal.id} deal={deal} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Trending Now Section */}
        {trendingNow.length > 0 && (
          <section>
            <div className="mb-10 border-b border-border/50 pb-6">
              <h2 className="text-3xl font-black tracking-tight">Trending Now</h2>
              <p className="text-muted-foreground mt-2 text-lg">Deals that our users are saving and sharing right now.</p>
            </div>
            
            <div className="space-y-6">
              {trendingNow.map((deal, index) => (
                <RankedDealItem key={deal.id} deal={deal} index={index + topSavings.length} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State when filters yield no results */}
        {topSavings.length === 0 && trendingNow.length === 0 && (
          <div className="text-center py-32 glass-panel rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-3">No curated deals found</h3>
            <p className="text-muted-foreground text-lg">Try selecting a different category or view all deals.</p>
            <button 
              onClick={() => setActiveFilter("All")}
              className="mt-8 px-6 py-3 rounded-full bg-secondary font-bold hover:bg-secondary/80 transition-colors"
            >
              View All Top Deals
            </button>
          </div>
        )}

        {/* Methodology Note */}
        <section className="glass-panel rounded-[2rem] p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h4 className="font-bold text-lg mb-4">Our Methodology</h4>
          <p className="text-muted-foreground leading-relaxed">
            The ShoppinGenie algorithm evaluates deals based on a strict criteria combining historical price data, 
            vendor reliability, stock velocity, and absolute discount percentage. A "Top Deal" must beat the 30-day 
            average price by at least 15% and come from a verified seller. This page is updated every 15 minutes.
          </p>
        </section>

      </div>
    </div>
  )
}
