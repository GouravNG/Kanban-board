"use client"

import { useState } from "react"
import { FloatingBugButton } from "@/components/ui/FloatingBugButton"
import { BugReportForm } from "@/components/Forms/BugReportForm"
import { createGithubIssue } from "@/lib/server-fn/create-github-issue"
import { toast } from "sonner"

export function BugReportHandler() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleFormSubmit = async (data: {
    title: string
    description: string
  }) => {
    try {
      await createGithubIssue(data)
      toast.success("Bug report submitted successfully!")
      setIsFormOpen(false)
    } catch (error) {
      toast.error("Failed to submit bug report. Please try again.")
      console.log(error)
    }
  }

  return (
    <>
      <FloatingBugButton onClick={() => setIsFormOpen(true)} />
      <BugReportForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </>
  )
}
