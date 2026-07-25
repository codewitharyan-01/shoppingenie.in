"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Crown } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Deal } from "./types"

interface FeaturedDealProps {
  deal: Deal
}

export function FeaturedDeal({ deal }: FeaturedDealProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-2 border-primary/20 bg-primary/5">
        <div className="grid md:grid-cols-2">
          {/* Image Side */}
          <div className="bg-muted relative min-h-[300px] flex items-center justify-center overflow-hidden">
             {deal.imageUrl && deal.imageUrl !== "placeholder" ? (
               <img src={deal.imageUrl} alt={deal.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             ) : (
               <>
                 <div className="absolute inset-0 bg-secondary/30" />
                 <span className="relative z-10 text-muted-foreground font-medium text-lg">{deal.category} Image</span>
               </>
             )}
             
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
             
             <div className="absolute top-4 left-4 z-10 flex gap-2">
               <Badge className="bg-primary text-primary-foreground font-bold px-3 py-1 text-sm uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                 <Crown className="h-4 w-4" /> Deal of the Day
               </Badge>
             </div>
             
             <div className="absolute bottom-4 left-4 z-10">
               <Badge className="bg-destructive text-white font-black px-4 py-2 text-xl shadow-lg border-2 border-background">
                 {deal.discountPercentage}% OFF
               </Badge>
             </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">{deal.platform}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">{deal.postedAt}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              {deal.title}
            </h2>
            
            <div className="flex items-end gap-3 mb-8">
              <span className="text-5xl font-black tracking-tighter text-primary">{formatPrice(deal.currentPrice)}</span>
              <span className="text-xl text-muted-foreground line-through mb-1.5">{formatPrice(deal.originalPrice)}</span>
            </div>

            {deal.notes && (
              <p className="text-muted-foreground mb-8 text-lg border-l-4 border-primary/30 pl-4 italic">
                "{deal.notes}"
              </p>
            )}

            <Button 
              size="lg" 
              className="w-full md:w-auto self-start text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/20 transition-all gap-2"
              onClick={() => window.open(deal.url, "_blank")}
            >
              Grab This Deal <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
