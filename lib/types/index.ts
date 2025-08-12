import type { Clerk } from "@clerk/types"
export * from "./board.types"
export * from "./column.types"
export * from "./task.types"

declare global {
  interface Window {
    Clerk: Clerk
  }
}
