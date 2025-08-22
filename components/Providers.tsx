"use client"

import { getQueryClient } from "@/lib/queryclient/get-query-client"
import { ClerkProvider } from "@clerk/nextjs"
import { QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ClerkWrapper from "./Clerk.wrapper"

const Providers = ({ children }: { children: React.ReactNode }) => {
  const tanstackQueryClient = getQueryClient()
  return (
    <ClerkProvider>
      <QueryClientProvider client={tanstackQueryClient}>
        <ClerkWrapper>{children}</ClerkWrapper>
      </QueryClientProvider>
    </ClerkProvider>
  )
}

export default Providers
