import {
  queryOptions,
  useMutation,
  useQueries,
  useQueryClient,
} from "@tanstack/react-query"
import { createTaskByBoardId, getTasksByColumnId } from "../functions/tasks.fn"
import { TCreateTask } from "../schema"
import { toast } from "sonner"
import useDismissDialog from "./useDismissDialog"

// POST
export const useCreateTask = (id: number) => {
  const qc = useQueryClient()
  const { dismiss } = useDismissDialog()
  return useMutation({
    mutationKey: ["task", id],
    mutationFn: (payload: TCreateTask) => createTaskByBoardId(payload),
    onSuccess: () => {
      toast.success("Created the new task successfully")
      dismiss()
    },
    onError: () => toast.error("Something went wrong!!"),
    onSettled: () => qc.invalidateQueries({ queryKey: ["task", id] }),
  })
}

// GET
export const taskOptions = (id: number) =>
  queryOptions({
    queryKey: ["task", id],
    queryFn: () => getTasksByColumnId(id),
  })

// GET
export const useTasksByColumnId = (data: number[]) => {
  return useQueries({
    queries: data.map((id) => ({
      ...taskOptions(id),
    })),
  })
}
