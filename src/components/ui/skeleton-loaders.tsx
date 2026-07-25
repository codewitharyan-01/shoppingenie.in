"use client"

import * as React from "react"

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} />
}

export function DealCardSkeleton() {
  return (
    <div className="bg-card border border-border/60 rounded-2xl overflow-hidden">
      <div className="skeleton h-48 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="skeleton h-3 w-16 rounded-full" />
          <div className="skeleton h-3 w-12 rounded-full" />
        </div>
        <div className="skeleton h-4 w-full rounded-full" />
        <div className="skeleton h-4 w-3/4 rounded-full" />
        <div className="flex items-end gap-2 pt-1">
          <div className="skeleton h-7 w-24 rounded-full" />
          <div className="skeleton h-4 w-16 rounded-full" />
        </div>
        <div className="skeleton h-3 w-20 rounded-full" />
        <div className="skeleton h-10 w-full rounded-xl mt-2" />
      </div>
    </div>
  )
}

export function CategoryCardSkeleton() {
  return (
    <div className="glass-panel p-6 rounded-2xl">
      <div className="skeleton h-12 w-12 rounded-2xl mb-6" />
      <div className="skeleton h-5 w-24 rounded-full mb-2" />
      <div className="skeleton h-3 w-16 rounded-full" />
    </div>
  )
}
