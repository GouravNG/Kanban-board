import {
  queryOptions,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import { createTaskByBoardId, getTasksByColumnId } from "../functions/tasks.fn"
import { TCreateTask } from "../schema"
import { toast } from "sonner"
import useDismissDialog from "./useDismissDialog"

// POST
export const useCreateTask = (id: number | string) => {
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
    onSettled: () => qc.invalidateQueries({ queryKey: ["task"], exact: false }),
  })
}

// GET
export const taskOptions = (id: number) =>
  queryOptions({
    queryKey: ["task", id],
    queryFn: () => getTasksByColumnId(id),
    select: (d) => d[0],
  })

// GET
export const useTasksByColumnId = (data: number[]) => {
  return useQueries({
    queries: data.map((id) => ({
      ...taskOptions(id),
    })),
  })
}

// GET TASK COUNT
export const useTaskSortNumber = (c_id: number) => {
  return useQuery({ ...taskOptions(c_id), select: (d) => d[0].tasks.length })
}
