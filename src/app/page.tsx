"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import Link from "next/link"
import {
  Search, Sparkles, Zap, ShieldCheck, ArrowRight,
  TrendingDown, BarChart3, Bell, CheckCircle2, ChevronRight
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DealCard } from "@/components/deals/deal-card"

/* ─── Animation Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/* ─── Data ─── */
const categories = [
  { title: "Smartphones", count: "1,204", icon: "📱" },
  { title: "Laptops", count: "843", icon: "💻" },
  { title: "Audio", count: "2,105", icon: "🎧" },
  { title: "Home", count: "956", icon: "🏠" },
  { title: "Fashion", count: "3,412", icon: "👕" },
  { title: "Beauty", count: "1,780", icon: "✨" },
]

const recentDeals = [
  {
    id: "1",
    title: "Bergner Cookware Set (5 Pieces)",
    platform: "Amazon",
    originalPrice: 4500,
    currentPrice: 1999,
    discountPercentage: 55,
    category: "Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800",
    postedAt: "2 mins ago",
    isVerified: true,
    urgencyLevel: "high",
    url: "#",
    priceHistory: [],
  },
  {
    id: "2",
    title: "Sony WH-1000XM5 Noise Cancelling",
    platform: "Flipkart",
    originalPrice: 29990,
    currentPrice: 24990,
    discountPercentage: 16,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
    postedAt: "5 mins ago",
    isVerified: true,
    url: "#",
    priceHistory: [],
  },
  {
    id: "3",
    title: "Nike Air Max 270 React",
    platform: "Myntra",
    originalPrice: 12995,
    currentPrice: 7797,
    discountPercentage: 40,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    postedAt: "15 mins ago",
    isVerified: true,
    urgencyLevel: "medium",
    url: "#",
    priceHistory: [],
  },
  {
    id: "4",
    title: "Samsung Galaxy S23 Ultra 5G",
    platform: "Amazon",
    originalPrice: 124999,
    currentPrice: 104999,
    discountPercentage: 16,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
    postedAt: "22 mins ago",
    isVerified: true,
    url: "#",
    priceHistory: [],
  },
]

const platforms = ["Amazon", "Flipkart", "Myntra", "Ajio", "Croma", "Reliance"]

const howItWorks = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Search any product or paste a link. Our AI finds the best prices across every major Indian platform.",
  },
  {
    icon: BarChart3,
    title: "Price Intelligence",
    desc: "See 30-day price curves. Know if today's deal is genuinely low — or just a relabeled MRP.",
  },
  {
    icon: Bell,
    title: "Drop Alerts",
    desc: "Set a target price. We'll notify you the moment it drops — whether during a sale or a random Tuesday.",
  },
]

export default function Home() {
  const [searchValue, setSearchValue] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      window.location.href = `/deals?q=${encodeURIComponent(searchValue.trim())}`
    }
  }

  return (
    <div className="flex-1">
      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto px-5 sm:px-8 max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-7">
            
            {/* Eyebrow chip */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 backdrop-blur-md border border-border/40 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Tracking 2M+ products in real-time
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.75rem] sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-foreground"
            >
              Find the lowest{" "}
              <br className="hidden sm:block" />
              price.{" "}
              <span className="text-muted-foreground/50">Every time.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              ShoppinGenie tracks millions of products across Indian ecommerce to expose fake discounts and find you the real lowest prices.
            </motion.p>

            {/* Search bar */}
            <motion.div variants={fadeUp} className="max-w-xl mx-auto pt-4">
              <form
                onSubmit={handleSearch}
                className="relative bg-card border border-border/60 rounded-2xl overflow-hidden shadow-lg shadow-black/[0.03] transition-shadow focus-within:shadow-xl focus-within:shadow-black/[0.06] focus-within:border-border"
              >
                <div className="flex items-center">
                  <div className="pl-5">
                    <Search className="h-[18px] w-[18px] text-muted-foreground" />
                  </div>
                  <Input
                    type="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search any product or paste a link..."
                    className="border-none shadow-none bg-transparent h-14 text-[15px] focus-visible:ring-0 px-3 placeholder:text-muted-foreground/50"
                  />
                  <Button
                    type="submit"
                    className="rounded-xl h-10 px-5 mr-2 text-sm font-medium hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/85 active:scale-95 transition-all"
                  >
                    Search
                  </Button>
                </div>
              </form>

              {/* CTAs */}
              <div className="flex items-center justify-center gap-3 mt-5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full h-11 px-6 text-sm font-medium bg-foreground text-background hover:bg-foreground/85 active:scale-95 transition-all shadow-sm sm:hidden"
                >
                  <Link href="/deals">Browse Deals</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full h-11 px-5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all"
                >
                  <Link href="/how-it-works" className="flex items-center gap-2">
                    How it works <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Trust Labels */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 sm:gap-6 pt-4 flex-wrap">
              {[
                { icon: ShieldCheck, label: "Verified deals" },
                { icon: TrendingDown, label: "Price drop alerts" },
                { icon: Sparkles, label: "AI-powered" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/70"
                >
                  <Icon className="h-3.5 w-3.5" /> {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CATEGORIES
      ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="mx-auto px-5 sm:px-8 max-w-6xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Browse by</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Categories</h2>
            </div>
            <Link
              href="/deals"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {categories.map((cat, i) => (
              <Link key={cat.title} href={`/deals?category=${cat.title}`}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                  className="bg-card border border-border/50 rounded-2xl p-5 hover:border-border hover:shadow-md hover:shadow-black/[0.03] hover:-translate-y-1 active:scale-[0.97] transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{cat.count} deals</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          RECENT PRICE DROPS
      ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/40 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[var(--accent-glow)]/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="mx-auto px-5 sm:px-8 max-w-6xl relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Live · Updated just now</p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Recent Price Drops</h2>
            </div>
            <Link
              href="/deals"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentDeals.map((deal: any, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                <DealCard deal={deal} />
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline" className="rounded-full px-6 h-11 text-sm font-medium">
              <Link href="/deals" className="flex items-center gap-2">
                View all deals <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="mx-auto px-5 sm:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Intelligence</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How ShoppinGenie works</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-10">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/80 border border-border/40 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-5 w-5 text-foreground/70" />
                </div>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="rounded-full h-11 px-6 text-sm font-medium hover:bg-secondary/60 transition-all"
            >
              <Link href="/how-it-works" className="flex items-center gap-2">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PLATFORM STRIP
      ═══════════════════════════════════════════════ */}
      <section className="py-14 border-t border-border/40 relative z-10">
        <div className="mx-auto px-5 sm:px-8 max-w-5xl text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground/60 mb-6">
            Tracking prices across
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="text-base sm:text-lg font-semibold tracking-tight text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-500"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="mx-auto px-5 sm:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-foreground text-background rounded-3xl p-10 sm:p-14 shadow-2xl shadow-foreground/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Never overpay again.
            </h2>
            <p className="text-background/60 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
              Start tracking prices, get instant alerts on real price drops, and make every rupee count.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-8 text-sm font-medium bg-background text-foreground hover:bg-background/90 active:scale-95 transition-all shadow-sm w-full sm:w-auto"
              >
                <Link href="/deals">Browse Deals</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full h-12 px-8 text-sm font-medium text-background/70 hover:text-background hover:bg-background/10 transition-all w-full sm:w-auto"
              >
                <Link href="/how-it-works">How it works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
