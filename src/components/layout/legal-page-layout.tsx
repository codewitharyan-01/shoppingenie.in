"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  label: string
}

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  tocItems: TocItem[]
  children: React.ReactNode
}

export function LegalPageLayout({
  title,
  lastUpdated,
  tocItems,
  children,
}: LegalPageLayoutProps) {
  const [activeId, setActiveId] = React.useState(tocItems[0]?.id ?? "")
  const [tocOpen, setTocOpen] = React.useState(false)

  // Intersection observer for active section tracking
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [tocItems])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setTocOpen(false)
    }
  }

  return (
    <div className="flex-1 bg-transparent pb-20 relative z-10">
      {/* Header */}
      <section className="pt-24 pb-14 md:pt-32 md:pb-16 border-b border-border/50 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-sm font-medium text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-10">
        <div className="flex gap-12">
          {/* Desktop TOC — sticky sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <nav className="sticky top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                On this page
              </p>
              <ul className="space-y-1 border-l">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={cn(
                        "block w-full text-left text-sm py-1.5 pl-4 -ml-px border-l-2 transition-colors",
                        activeId === item.id
                          ? "border-primary text-primary font-semibold"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Mobile TOC — collapsible */}
          <div className="lg:hidden w-full mb-8">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="flex items-center justify-between w-full border rounded-lg px-4 py-3 text-sm font-semibold bg-muted/30"
            >
              <span>Table of Contents</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  tocOpen ? "rotate-180" : ""
                )}
              />
            </button>
            {tocOpen && (
              <ul className="border rounded-lg mt-2 divide-y">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-muted/30 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 lg:max-w-none max-w-2xl mx-auto prose-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Reusable styled elements for legal content ---
export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-14">
      <h2 className="text-xl font-bold tracking-tight mb-4 flex items-baseline gap-3">
        <span className="text-primary font-black">{number}.</span> {title}
      </h2>
      <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}
