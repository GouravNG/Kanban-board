import type { CreateTaskSchema } from "@/lib/schema"

export type { CreateTaskSchema } from "@/lib/schema"

export type TaskPriorities = CreateTaskSchema["priority"]

export type Tasks = {
  id: number
  title: string
  assignee: string
  due_date: string
  priority: TaskPriorities
  column_id: number
  created_at: string
  sort_order: number
  description: string
}

export type TResponseTask = {
  id: number
  created_at: string
  board_id: number
  title: string
  sort_order: number
  user_id: string
  tasks: Tasks[]
}
