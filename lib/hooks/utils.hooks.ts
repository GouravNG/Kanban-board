import { useAuthKey } from "@/store/persist.store"
import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"

export const useToken = () => {
  const { getToken, isLoaded } = useAuth()
  const { setAuthKey, authKey } = useAuthKey()

  useEffect(() => {
    let interval: NodeJS.Timeout

    const retrieveToken = async () => {
      const token = await getToken({ template: "supabase" })
      setAuthKey(token)
    }

    if (isLoaded) {
      retrieveToken()
      interval = setInterval(retrieveToken, 1 * 60 * 1000)
    }

    return () => clearInterval(interval)
  }, [isLoaded, getToken, setAuthKey])

  return { isLoaded, authKey }
}
