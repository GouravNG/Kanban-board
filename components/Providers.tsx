"use client"

import { getQueryClient } from "@/lib/queryclient/get-query-client"
import { ClerkProvider } from "@clerk/nextjs"
import { QueryClientProvider } from "@tanstack/react-query"
import React from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
  const tanstackQueryClient = getQueryClient()
  return (
    <ClerkProvider>
      <QueryClientProvider client={tanstackQueryClient}>
        {children}
      </QueryClientProvider>
    </ClerkProvider>
  )
}

export default Providers
