import { columnsURL } from "../endpoints"
import queryClient from "../queryclient/axios.config"
import { CreateColumnSchema } from "../schema"

export const createColumn = async (
  requestBody: CreateColumnSchema | CreateColumnSchema[]
) => {
  const res = await queryClient.post(columnsURL.url_CreateCol(), requestBody)
  return res.data
}
