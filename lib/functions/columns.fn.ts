import { columnsURL } from "../endpoints"
import queryClient from "../queryclient/axios.config"
import { TCreateColumn, TGetColumn, TUpdateColumn } from "../schema"

// POST
export const createColumn = async (requestBody: TCreateColumn) => {
  const res = await queryClient.post<TGetColumn[]>(
    columnsURL.url_CreateCol(),
    requestBody
  )
  return res.data
}

export const updateColumnById = async (
  id: number,
  requestBody: TUpdateColumn
) => {
  const res = await queryClient.patch(
    columnsURL.url_updateColumn(id),
    requestBody
  )
  return res.data
}

export const deleteColumnById = async (id: number) => {
  const res = await queryClient.delete(columnsURL.url_deleteColumn(id))
  return res.data
}
