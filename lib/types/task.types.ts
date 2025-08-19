import { TGetTask } from "../schema"

// From Schema
export type {
  TCreateTask,
  TUpdateColumn,
  TGetColumn,
  TReorderTask,
} from "@/lib/schema"

// Customs
export type TaskPriorities = TGetTask["priority"]

export type TResponseTask = {
  id: number
  created_at: string
  board_id: number
  title: string
  sort_order: number
  user_id: string
  tasks: TGetTask[]
}
