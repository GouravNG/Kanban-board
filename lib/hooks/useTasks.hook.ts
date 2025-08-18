import {
  queryOptions,
  useMutation,
  useQueries,
  useQueryClient,
} from "@tanstack/react-query"
import { createTaskByBoardId, getTasksByColumnId } from "../functions/tasks.fn"
import { CreateTaskSchema } from "../schema"
import { useGetAllColumnIds } from "../hooks/useBoards.hook"
import { TResponseTask } from "../types"

export const useCreateTask = (id: number) => {
  const qc = useQueryClient()
  return useMutation({
    mutationKey: ["task", id],
    mutationFn: (payload: CreateTaskSchema) => createTaskByBoardId(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["task", id] }),
  })
}

export const taskOptions = (id: number) =>
  queryOptions({
    queryKey: ["task", id],
    queryFn: () => getTasksByColumnId(id),
  })

export const useTasksByColumnId = (data: number[]) => {
  return useQueries({
    queries: data.map((id) => ({
      ...taskOptions(id),
    })),
  })
}
