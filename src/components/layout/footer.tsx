import Link from "next/link"
import { Sparkles } from "lucide-react"

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "All Deals", href: "/deals" },
      { label: "Top Deals", href: "/top-deals" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Price Alerts", href: "/deals" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Brand Story", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclosure", href: "/disclosure" },
    ],
  },
]

const platforms = ["Amazon", "Flipkart", "Myntra", "Ajio", "Croma", "Reliance Digital"]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/60 relative z-20">
      {/* Main Footer */}
      <div className="mx-auto px-5 sm:px-8 max-w-7xl pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="bg-foreground text-background w-8 h-8 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold text-lg tracking-tight">
                ShoppinGenie
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              India's AI-powered shopping intelligence platform. We track prices across major ecommerce platforms, verify deals, and expose fake discounts — so you always pay the lowest real price.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="text-xs font-medium text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full">🔍 AI Search</span>
              <span className="text-xs font-medium text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full">✓ Verified</span>
              <span className="text-xs font-medium text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full">📊 Price History</span>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Platforms Column */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Platforms
            </h4>
            <ul className="space-y-2.5">
              {platforms.map((platform) => (
                <li key={platform}>
                  <span className="text-sm text-foreground/70">{platform}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto px-5 sm:px-8 max-w-7xl py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ShoppinGenie. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Built in India 🇮🇳</span>
            <span className="w-px h-3 bg-border" />
            <span>AI-Powered Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
