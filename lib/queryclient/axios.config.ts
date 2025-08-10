import axios from "axios"

const queryClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANAON_KEY!,
  },
})

export default queryClient
