"use client"

import { Button } from "@/components/ui/button"
import { Bug } from "lucide-react"

export function FloatingBugButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg"
      aria-label="Report a bug"
    >
      <Bug className="h-6 w-6" />
    </Button>
  )
}
