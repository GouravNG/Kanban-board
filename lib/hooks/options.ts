import { queryOptions } from "@tanstack/react-query"
import { getBoards } from "../functions"

export const getBoardOption = (token: string = "") =>
  queryOptions({
    queryKey: ["board"],
    queryFn: () => getBoards(token),
  })
