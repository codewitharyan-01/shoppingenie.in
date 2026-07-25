import * as React from "react"
import { Sparkles, TrendingDown, Clock, ShieldCheck, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReasonTagProps extends React.HTMLAttributes<HTMLDivElement> {
  reason: string
}

export function ReasonTag({ reason, className, ...props }: ReasonTagProps) {
  let Icon = Sparkles
  let colorClass = "bg-primary/10 text-primary border-primary/20"

  const lowerReason = reason.toLowerCase()

  if (lowerReason.includes("lowest historical")) {
    Icon = Flame
    colorClass = "bg-red-500/10 text-red-600 border-red-500/20"
  } else if (lowerReason.includes("drop") || lowerReason.includes("savings")) {
    Icon = TrendingDown
    colorClass = "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
  } else if (lowerReason.includes("stock") || lowerReason.includes("trending")) {
    Icon = Clock
    colorClass = "bg-orange-500/10 text-orange-600 border-orange-500/20"
  } else if (lowerReason.includes("verified")) {
    Icon = ShieldCheck
    colorClass = "bg-blue-500/10 text-blue-600 border-blue-500/20"
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold tracking-wide uppercase",
        colorClass,
        className
      )}
      {...props}
    >
      <Icon className="h-3.5 w-3.5" />
      {reason}
    </div>
  )
}
