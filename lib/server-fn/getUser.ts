import "server-only"

import { currentUser } from "@clerk/nextjs/server"

type TUser = {
  userId: string
  userName: string
}

export const getUser = async (): Promise<TUser | null> => {
  const user = await currentUser()
  if (!user) return null

  return {
    userId: user.id,
    userName: user.emailAddresses[0].emailAddress.split("@")[0],
  }
}
