import axios from "axios"
import { getHeaders } from "../functions/utils"
import { auth } from "@clerk/nextjs/server"

const queryClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  ...getHeaders(),
})

queryClient.interceptors.request.use(async (config) => {
  if (typeof window !== "undefined") {
    // For client
    const token = window.Clerk.session
      ? await window.Clerk.session.getToken()
      : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } else {
    // for server
    const { getToken } = await auth()
    const token = await getToken()
    if (token !== null) config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default queryClient
