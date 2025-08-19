import { TGetBoard } from "../schema/board.schema"
import { TGetColumn } from "./column.types"

// From Schema
export type { TCreateBoard, TUpdateBoard, TGetBoard } from "@/lib/schema"

// Customs
export type TBoardById = {
  columns: TGetColumn[]
} & TGetBoard
