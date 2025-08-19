import { columnsURL, tasksURL } from "../endpoints"
import queryClient from "../queryclient/axios.config"
import { TCreateTask } from "../schema"
import { TResponseTask } from "../types"

// POST
export const createTaskByBoardId = async (payload: TCreateTask) => {
  const res = await queryClient.post(tasksURL.url_createTask(), payload)
  return res.data
}

// GET
export const getTasksByColumnId = async (id: number) => {
  const res = await queryClient.get<TResponseTask[]>(
    columnsURL.url_getTasksByColumnId(id)
  )
  return res.data
}
