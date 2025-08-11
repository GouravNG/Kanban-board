import { useMutation } from "@tanstack/react-query"
import { createColumn } from "../functions/columns.fn"
import { CreateColumnSchema } from "../types"
import { toast } from "sonner"
import { useToken } from "./utils.hooks"

export const useCreateColumns = () => {
  useToken()
  return useMutation({
    mutationKey: ["column"],
    mutationFn: (payload: CreateColumnSchema | CreateColumnSchema[]) =>
      createColumn(payload),
    onSuccess: () => toast("New Board Created Successfully"),
    onError: () => toast("Something went wrong!!"),
  })
}
