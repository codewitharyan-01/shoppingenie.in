"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MessageCircle,
  Send,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// --- Animation ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
      {children}
    </span>
  )
}

// --- FAQ ---
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
      >
        <span className="font-semibold text-base group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

// --- Page ---
export default function ContactPage() {
  const [formState, setFormState] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd)
    const newErrors: Record<string, string> = {}

    if (!data.name || (data.name as string).trim().length < 2)
      newErrors.name = "Name is required."
    if (
      !data.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)
    )
      newErrors.email = "A valid email is required."
    if (!data.subject || (data.subject as string).trim().length < 3)
      newErrors.subject = "Please add a subject."
    if (!data.message || (data.message as string).trim().length < 10)
      newErrors.message = "Message must be at least 10 characters."

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setFormState("loading")

    // Simulate submission
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  return (
    <div className="flex-1 bg-background">
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-muted/20 border-b">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Eyebrow>Contact Us</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            >
              We&apos;d love to hear from you
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Whether it&apos;s a bug, a feature idea, or a partnership proposal
              — we&apos;re here and we respond fast.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12 md:py-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column — Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-2 space-y-10"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We typically respond within 24 hours on business days. For
                urgent issues, use WhatsApp for the fastest reply.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "support@shoppingenie.in",
                  sub: "For all inquiries",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+91 98765 43210",
                  sub: "Mon–Sat, 10am–7pm IST",
                },
                {
                  icon: Send,
                  label: "Telegram",
                  value: "@ShoppinGenieBot",
                  sub: "Deal alerts & community",
                },
              ].map((ch) => (
                <div key={ch.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ch.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{ch.label}</p>
                    <p className="text-sm text-foreground">{ch.value}</p>
                    <p className="text-xs text-muted-foreground">{ch.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="glass-panel rounded-[2rem] p-6 space-y-3">
                <h3 className="font-bold text-sm">Response Times</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span>General Support</span>
                    <Badge
                      variant="outline"
                      className="text-xs font-medium border-border/50 bg-background/50"
                    >
                      &lt; 24h
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Partnership Inquiries</span>
                    <Badge
                      variant="outline"
                      className="text-xs font-medium border-border/50 bg-background/50"
                    >
                      2–3 days
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bug Reports</span>
                    <Badge
                      variant="outline"
                      className="text-xs font-medium border-border/50 bg-background/50"
                    >
                      &lt; 12h
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-[2rem]">
              <div className="p-6 md:p-8">
                {formState === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setFormState("idle")}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="text-sm font-semibold"
                        >
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="Your full name"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="text-sm font-semibold"
                        >
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-subject"
                          className="text-sm font-semibold"
                        >
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="contact-subject"
                          name="subject"
                          placeholder="Brief subject line"
                          className={
                            errors.subject ? "border-destructive" : ""
                          }
                        />
                        {errors.subject && (
                          <p className="text-xs text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />{" "}
                            {errors.subject}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-category"
                          className="text-sm font-semibold"
                        >
                          Category
                        </label>
                        <select
                          id="contact-category"
                          name="category"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="support">Support</option>
                          <option value="feedback">Feedback</option>
                          <option value="partnership">Partnership</option>
                          <option value="media">Media Inquiry</option>
                          <option value="feature">Feature Request</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="text-sm font-semibold"
                      >
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className={`flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none ${errors.message ? "border-destructive" : "border-input"}`}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={formState === "loading"}
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send Message <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <section className="border-t bg-muted/20 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Before you reach out
            </h2>
          </div>
          <div className="border rounded-xl px-6 bg-background">
            <FaqItem
              q="How do I report a wrong price?"
              a="Use the form above with the 'Support' category. Include the product name and platform, and we'll investigate within 12 hours."
            />
            <FaqItem
              q="Can I suggest a new platform to track?"
              a="Absolutely! Select 'Feature Request' in the category dropdown and tell us which platform you'd like us to add."
            />
            <FaqItem
              q="Do you offer partnership opportunities?"
              a="Yes — we work with brands, platforms, and content creators. Select 'Partnership' and share a brief about your proposal."
            />
            <FaqItem
              q="How do I unsubscribe from alerts?"
              a="You can manage all your alert preferences from your account settings. If you don't have an account, reply 'STOP' to any WhatsApp or email alert."
            />
          </div>
        </div>
      </section>
    </div>
  )
}
