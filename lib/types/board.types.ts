import { CreateBoardSchema } from "../schema/board.schema"
import { CreateColumnSchema, TColumn } from "./column.types"

export type { CreateBoardSchema, UpdateBoardSchema } from "@/lib/schema"

export type CreateBoardPayload = {
  boardDetails: CreateBoardSchema
  columnDetails?: CreateColumnSchema
}

export type TBoards = {
  id: number
  created_at: string
  updated_at: string
  title: string
  user_id: string
  description: string
  color: CreateBoardSchema["color"]
}

export type TBoardById = {
  columns: TColumn[]
} & TBoards
