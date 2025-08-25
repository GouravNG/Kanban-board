"use client"

import { useUserId, useUserName } from "@/store/persist.store"
import { useUser } from "@clerk/nextjs"
import MainLoader from "./skeletons/Main.loader"
import { useEffect } from "react"

const ClerkWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded, isSignedIn } = useUser()
  const { setUserName } = useUserName()
  const { setUserId } = useUserId()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const userName = user.emailAddresses[0].toString().split("@")[0]
      setUserName(userName)
      setUserId(user.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, isSignedIn, setUserId, setUserName, user?.id])

  if (!isLoaded) return <MainLoader />

  if (isLoaded) {
    return <>{children}</>
  }
}

export default ClerkWrapper
