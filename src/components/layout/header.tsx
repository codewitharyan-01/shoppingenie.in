"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Sparkles, ArrowRight, TrendingDown, ShieldCheck, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/deals", label: "Deals" },
    { href: "/top-deals", label: "Top Deals" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
  ]

  const quickLinks = [
    { href: "/deals?category=Electronics", label: "Electronics", icon: "📱" },
    { href: "/deals?category=Fashion", label: "Fashion", icon: "👕" },
    { href: "/deals?category=Home", label: "Home", icon: "🏠" },
    { href: "/deals?category=Beauty", label: "Beauty", icon: "✨" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/40 py-3"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="mx-auto px-5 sm:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 relative z-50">
          <div className="bg-foreground text-background w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight text-[17px] hidden sm:block">
            ShoppinGenie
          </span>
        </Link>
        
        {/* Desktop Nav — Centered pill */}
        <nav className="hidden lg:flex items-center justify-center gap-1 flex-1 max-w-md mx-auto">
          <div className="flex items-center bg-secondary/50 rounded-full p-1 backdrop-blur-md border border-border/30">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Actions & Mobile Menu */}
        <div className="flex items-center justify-end gap-3 shrink-0 relative z-50">
          <Link
            href="/deals"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
            aria-label="Search deals"
          >
            <Search className="h-4 w-4" />
          </Link>
          
          <Button
            asChild
            className="hidden md:inline-flex rounded-full px-5 h-9 text-[13px] font-medium bg-foreground text-background hover:bg-foreground/85 active:scale-95 transition-all shadow-sm"
          >
            <Link href="/deals">Browse Deals</Link>
          </Button>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-secondary/60 active:scale-90 transition-all"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 7, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1.5px] bg-foreground block rounded-full origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-[18px] h-[1.5px] bg-foreground block rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -7, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1.5px] bg-foreground block rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-6 pt-24 pb-10">
              {/* Mobile Search */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
                className="relative w-full mb-8"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search deals, products..."
                  className="pl-12 h-[52px] rounded-2xl bg-secondary/40 text-[15px] font-medium border-transparent focus-visible:ring-1 focus-visible:ring-border/80 placeholder:text-muted-foreground/60"
                />
              </motion.div>

              {/* Primary Nav */}
              <nav className="flex flex-col gap-1 mb-8">
                {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.4, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between text-[22px] font-semibold px-4 py-3.5 rounded-2xl transition-all ${
                          isActive
                            ? "bg-foreground text-background"
                            : "text-foreground/70 hover:bg-secondary/60 hover:text-foreground active:scale-[0.98]"
                        }`}
                      >
                        {link.label}
                        <ArrowRight className={`h-4 w-4 ${isActive ? 'text-background/60' : 'text-muted-foreground/40'}`} />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Quick Category Links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                className="mb-8"
              >
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest px-4 mb-3">Quick Categories</p>
                <div className="flex gap-2 flex-wrap px-4">
                  {quickLinks.map((ql) => (
                    <Link
                      key={ql.label}
                      href={ql.href}
                      className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full bg-secondary/50 hover:bg-secondary text-foreground/80 hover:text-foreground transition-all active:scale-95"
                    >
                      <span>{ql.icon}</span> {ql.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                className="mt-auto px-4"
              >
                <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Verified Deals</span>
                  <span className="flex items-center gap-1.5"><TrendingDown className="h-3.5 w-3.5" /> Price Tracking</span>
                  <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> Real-time</span>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-2xl h-[52px] text-[15px] font-semibold bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98] transition-all shadow-lg"
                >
                  <Link href="/deals">Start Exploring Deals</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
