import { columnsURL } from "../endpoints"
import queryClient from "../queryclient/axios.config"
import { TCreateColumn, TGetColumn } from "../schema"

// POST
export const createColumn = async (requestBody: TCreateColumn) => {
  const res = await queryClient.post<TGetColumn[]>(
    columnsURL.url_CreateCol(),
    requestBody
  )
  return res.data
}
