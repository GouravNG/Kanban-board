import { columnsURL, tasksURL } from "../endpoints"
import queryClient from "../queryclient/axios.config"
import { CreateTaskSchema } from "../schema"
import { TResponseTask } from "../types"

export const createTaskByBoardId = async (payload: CreateTaskSchema) => {
  const res = await queryClient.post(tasksURL.url_createTask(), payload)
  return res.data
}

export const getTasksByColumnId = async (id: number) => {
  const res = await queryClient.get<TResponseTask[]>(
    columnsURL.url_getTasksByColumnId(id)
  )
  return res.data
}
