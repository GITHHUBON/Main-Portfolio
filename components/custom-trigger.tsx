"use client"

import * as React from "react"
import { Calendar, ChevronDown } from "lucide-react"

interface CustomTriggerProps {
  selectedYear: string
  onClick?: () => void
}

export const CustomTrigger = React.forwardRef<HTMLDivElement, CustomTriggerProps>(
  ({ selectedYear, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="gap-2 min-w-[150px] bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors rounded-md px-4 py-2 inline-flex items-center justify-center cursor-pointer"
        {...props}
      >
        <Calendar className="h-4 w-4 text-primary" />
        <span className="text-primary">{selectedYear}</span>
        <ChevronDown className="h-4 w-4 ml-auto text-primary" />
      </div>
    )
  }
)

CustomTrigger.displayName = "CustomTrigger"