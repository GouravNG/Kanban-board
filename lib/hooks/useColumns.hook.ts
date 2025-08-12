import { useMutation } from "@tanstack/react-query"
import { createColumn } from "../functions/columns.fn"
import { CreateColumnSchema } from "../types"
import { toast } from "sonner"

export const useCreateColumns = () => {
  return useMutation({
    mutationKey: ["column"],
    mutationFn: (payload: CreateColumnSchema | CreateColumnSchema[]) =>
      createColumn(payload),
    onSuccess: () => toast.success("New Board Created Successfully"),
    onError: () => toast.error("Something went wrong!!"),
  })
}
