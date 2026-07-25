"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Share2, Bookmark, ExternalLink, Flame, ShieldCheck, Clock } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Deal } from "./types"

interface DealCardProps {
  deal: Deal
  onClick?: (deal: Deal) => void
}

export function DealCard({ deal, onClick }: DealCardProps) {
  // Use formatter for Indian Rupee
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card 
        className="h-full overflow-hidden flex flex-col hover:border-primary/50 transition-colors cursor-pointer group"
        onClick={() => onClick?.(deal)}
      >
        <div className="h-48 bg-muted relative overflow-hidden">
          {/* Product Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
             {deal.imageUrl && deal.imageUrl !== "placeholder" ? (
               <img src={deal.imageUrl} alt={deal.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
             ) : (
               <span className="text-muted-foreground text-sm font-medium">{deal.category} Image</span>
             )}
          </div>
          
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge className="bg-destructive hover:bg-destructive/90 text-white font-bold px-2 py-1 text-sm">
              {deal.discountPercentage}% OFF
            </Badge>
            {deal.urgencyLevel === "high" && (
              <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 gap-1 backdrop-blur-md">
                <Flame className="h-3 w-3" /> Hot Deal
              </Badge>
            )}
          </div>
          
          <div className="absolute top-3 right-3 flex gap-2">
            <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); /* save logic */ }}>
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); /* share logic */ }}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <CardHeader className="pb-2 pt-4 px-4 flex-none">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-muted-foreground">{deal.platform}</span>
            {deal.isVerified && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">
                <ShieldCheck className="h-3 w-3" /> Verified
              </span>
            )}
          </div>
          <h3 className="font-semibold text-base line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {deal.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pb-4 px-4 flex-1">
          <div className="flex items-end gap-2 mt-2">
            <span className="text-2xl font-bold tracking-tight">{formatPrice(deal.currentPrice)}</span>
            <span className="text-sm text-muted-foreground line-through mb-1">{formatPrice(deal.originalPrice)}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-4">
            <Clock className="h-3 w-3" /> {deal.postedAt}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 px-4 pb-4 gap-2 flex-none mt-auto">
          <Button 
            className="w-full gap-2" 
            onClick={(e) => {
              e.stopPropagation()
              window.open(deal.url, "_blank")
            }}
          >
            Get Deal <ExternalLink className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
