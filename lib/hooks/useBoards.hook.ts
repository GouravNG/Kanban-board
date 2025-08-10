import { queryOptions, useMutation, useQuery } from "@tanstack/react-query"
import { createBoard, getBoards } from "../functions/boards.fn"

export const useCreateBoard = () => {
  return useMutation({
    mutationKey: ["board"],
    mutationFn: (body: unknown) => createBoard(body),
  })
}

const getBoardOption = queryOptions({
  queryKey: ["board"],
  queryFn: getBoards,
})

export const useBoardsCount = () => {
  return useQuery({
    ...getBoardOption,
    select: (data) => data.length,
  })
}
