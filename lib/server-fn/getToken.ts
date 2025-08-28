import "server-only"
import { auth } from "@clerk/nextjs/server"

const getToken = async () => {
  const { getToken } = await auth()
  const token = await getToken()
  return token ?? ""
}

export default getToken
