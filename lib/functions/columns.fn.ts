import queryClient from "../queryclient/axios.config"
import { CreateColumnSchema } from "../schema"

const API_DOMAIN = "rest/v1/columns"

export const createColumn = async (
  requestBody: CreateColumnSchema | CreateColumnSchema[]
) => {
  const res = await queryClient.post(API_DOMAIN, requestBody)
  return res.data
}
