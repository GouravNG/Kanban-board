import { useApikey } from "@/store/persist.store"
import { useAuth } from "@clerk/nextjs"

export const useToken = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth()
  const { setApiKey, apiKey } = useApikey()

  async function fetchToken() {
    console.log("fetch token is running...")
    if (!isLoaded || !isSignedIn) return setApiKey(null)
    try {
      const token = await getToken({ template: "supabase" })
      setApiKey(token)
    } catch (e) {
      if (e instanceof Error)
        console.error("Error fetching the Clerk token\n", e.message)
      setApiKey(null)
    }
  }

  fetchToken()

  return { apiKey }
}
