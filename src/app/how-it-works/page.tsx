"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Search,
  BarChart3,
  TrendingDown,
  Bell,
  ShieldCheck,
  Clock,
  Zap,
  Ban,
  ChevronDown,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// --- Animation helpers ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

// --- Section wrapper ---
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">{children}</div>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
      {children}
    </span>
  )
}

// --- FAQ Accordion Item ---
function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
      >
        <span className="font-semibold text-base group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

// --- Workflow steps data ---
const WORKFLOW_STEPS = [
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Search for any product. Our AI scans Amazon, Flipkart, Myntra, Shopsy, and more in real time.",
    example: 'You search "iPhone 15 Pro" — we find it on 4 platforms instantly.',
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Price Comparison",
    description:
      "See every platform's price side-by-side. No tab-switching, no guesswork.",
    example:
      "Amazon: ₹1,27,990 · Flipkart: ₹1,29,999 — you see the ₹2,009 gap immediately.",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: TrendingDown,
    title: "Price Tracking",
    description:
      "We track the price history over 30+ days so you know if today's deal is truly the lowest.",
    example:
      "The 30-day chart shows this price hasn't been this low since Diwali.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Bell,
    title: "Deal Alerts",
    description:
      "Set a target price. The moment it drops to your number, you get an instant notification.",
    example:
      'You set ₹1,20,000 for the Galaxy S23 — we ping you when Flipkart hits ₹1,04,999.',
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    description:
      "Every deal is cross-checked against the live listing before we show it. Expired deals are auto-removed.",
    example:
      "A seller inflates MRP before a sale — our system flags it, you never see the fake deal.",
    color: "bg-red-500/10 text-red-600",
  },
]

// --- Main page ---
export default function HowItWorksPage() {
  return (
    <div className="flex-1 bg-background">
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-muted/20 border-b">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>How It Works</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6"
            >
              From search to savings
              <br />
              <span className="text-primary">in five steps.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              ShoppinGenie does the hard work so you don't have to. Here's
              exactly how we find, verify, and deliver genuinely good deals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STEP FLOW — Timeline on desktop, stacked cards on mobile
      ═══════════════════════════════════════════════ */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Vertical timeline line (desktop only) */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-border" />

          <div className="space-y-8 md:space-y-0">
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="relative md:pl-24 md:pb-16 last:md:pb-0"
              >
                {/* Step number circle — desktop timeline node */}
                <div className="hidden md:flex absolute left-0 top-0 w-20 h-20 items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-sm">
                    <span className="text-xl font-black text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="glass-panel p-6 md:p-8 rounded-[2rem] hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    {/* Mobile step number + icon */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 sm:min-w-[72px]">
                      <div className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-black text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}
                      >
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <div className="bg-muted/50 rounded-xl px-4 py-3 border-l-4 border-primary/30">
                        <p className="text-sm italic text-muted-foreground">
                          <span className="font-semibold text-foreground not-italic">
                            Example:
                          </span>{" "}
                          {step.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          SAMPLE DEAL COMPARISON BLOCK
      ═══════════════════════════════════════════════ */}
      <Section className="bg-muted/20 border-y">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Live Example</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight"
          >
            See a real comparison
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto"
          >
            Here's how ShoppinGenie compares the same product across platforms
            so you always pick the best price.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <Card className="max-w-3xl mx-auto overflow-hidden border-2">
            <div className="bg-secondary/30 px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-lg">Sony WH-1000XM5</h3>
                <p className="text-sm text-muted-foreground">
                  Wireless Noise Cancelling Headphones
                </p>
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 self-start">
                Best Price Found
              </Badge>
            </div>

            <div className="divide-y">
              {[
                {
                  platform: "Amazon",
                  price: 29990,
                  sale: 26990,
                  best: false,
                },
                {
                  platform: "Flipkart",
                  price: 29990,
                  sale: 24990,
                  best: true,
                },
                {
                  platform: "Myntra",
                  price: 29990,
                  sale: 27999,
                  best: false,
                },
              ].map((row) => (
                <div
                  key={row.platform}
                  className={`flex items-center justify-between px-6 py-4 ${
                    row.best ? "bg-emerald-500/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-muted-foreground">
                        {row.platform.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{row.platform}</p>
                      <p className="text-xs text-muted-foreground line-through">
                        ₹{row.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xl font-black ${
                        row.best ? "text-emerald-600" : ""
                      }`}
                    >
                      ₹{row.sale.toLocaleString("en-IN")}
                    </span>
                    {row.best && (
                      <Badge className="bg-emerald-600 text-white text-[10px] px-2">
                        LOWEST
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 bg-muted/30 border-t text-center">
              <p className="text-sm text-muted-foreground">
                You save{" "}
                <span className="font-bold text-foreground">₹5,000</span> by
                choosing Flipkart over Amazon for this product.
              </p>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          HOW IT HELPS YOU — Outcomes
      ═══════════════════════════════════════════════ */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>How It Helps You</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight"
          >
            Real outcomes, not promises
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Clock,
              title: "Save Time",
              body: "Stop checking 4 apps. One search gives you every platform's price in seconds.",
              stat: "10×",
              statLabel: "faster than manual comparison",
            },
            {
              icon: TrendingDown,
              title: "Catch Better Prices",
              body: "30-day price history shows you exactly when a product hits its real lowest point.",
              stat: "₹2,400",
              statLabel: "average savings per purchase",
            },
            {
              icon: Ban,
              title: "Avoid Fake Deals",
              body: "Our verification engine flags inflated MRPs and manufactured discounts before you see them.",
              stat: "100%",
              statLabel: "of listed deals are verified",
            },
            {
              icon: Bell,
              title: "Get Price Alerts",
              body: "Set a target price and forget it. We'll notify you the instant it drops.",
              stat: "< 30s",
              statLabel: "alert delivery time",
            },
          ].map((outcome) => (
            <motion.div key={outcome.title} variants={fadeUp}>
              <div className="h-full glass-panel rounded-[2rem] p-6 space-y-5 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <outcome.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{outcome.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {outcome.body}
                  </p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-3xl font-black text-primary tracking-tight">
                    {outcome.stat}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-semibold">
                    {outcome.statLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          PLATFORMS WE COVER
      ═══════════════════════════════════════════════ */}
      <Section className="bg-muted/20 border-y">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Platforms We Cover</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight mb-4"
          >
            All major Indian shopping platforms
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mb-14 max-w-xl mx-auto"
          >
            We monitor prices and deals across these platforms in real time, so
            you never miss a drop.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { name: "Amazon", abbr: "AM" },
              { name: "Flipkart", abbr: "FK" },
              { name: "Myntra", abbr: "MY" },
              { name: "Shopsy", abbr: "SH" },
              { name: "Ajio", abbr: "AJ" },
              { name: "Croma", abbr: "CR" },
            ].map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-background border-2 border-border group-hover:border-primary/40 flex items-center justify-center transition-colors shadow-sm">
                  <span className="text-2xl font-black text-muted-foreground group-hover:text-primary transition-colors">
                    {platform.abbr}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {platform.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div variants={fadeUp}>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Common questions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Everything you need to know about how ShoppinGenie finds,
                verifies, and alerts you about the best deals.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="border rounded-xl px-6">
              <FaqItem
                question="How do price-drop alerts work?"
                answer="You pick any product and set your target price. Our system checks the live price every 15 minutes across all platforms. When the price hits your target — or goes below it — we send you a push notification and email within 30 seconds."
              />
              <FaqItem
                question="How do you verify that a deal is real?"
                answer="We compare the current 'sale' price against the product's 30-day price history. If the MRP was recently inflated to make the discount look bigger, we flag it and exclude the deal from our curated lists. Only genuine price drops make it through."
              />
              <FaqItem
                question="Is ShoppinGenie free to use?"
                answer="Yes. Browsing deals, searching products, and viewing price histories is completely free. We earn through affiliate partnerships with platforms — this never affects which deal we rank first. The best price always wins."
              />
              <FaqItem
                question="Which platforms do you support?"
                answer="We currently monitor Amazon India, Flipkart, Myntra, Shopsy, Ajio, and Croma. We're adding more platforms regularly based on user requests."
              />
              <FaqItem
                question="How often are deals updated?"
                answer="Our system refreshes prices every 15 minutes for tracked products and checks deal listings continuously throughout the day. The Top Deals page is re-ranked every hour."
              />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="container mx-auto px-4 max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black tracking-tight mb-6"
          >
            Ready to shop smarter?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg opacity-80 mb-10 max-w-lg mx-auto"
          >
            Browse verified deals, compare prices, and set alerts — all in one
            place.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full h-14 px-8 text-base font-bold gap-2"
              onClick={() => (window.location.href = "/deals")}
            >
              Browse Deals <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              onClick={() => (window.location.href = "/top-deals")}
            >
              View Top Picks <ExternalLink className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
