"use client"
import { useBoards } from "@/lib/hooks"
import { useViewToggles } from "@/store/persist.store"
import BoardsGridView from "@/components/Boards-gridview"
import BoardsListView from "@/components/Boards-listview"
import { SquareKanban } from "lucide-react"

const BoardsView = () => {
  const { data, error } = useBoards()
  const { viewMode } = useViewToggles()

  if (error)
    return (
      <h1 className="text-center text-red-500 font-semibold">
        Error fetching your boards.
      </h1>
    )

  return (
    <>
      {data.length === 0 ? (
        <div className="m-16 flex flex-col items-center justify-center">
          <SquareKanban className="w-10 h-10 text-blue-600" />
          <p className="font-semibold">No Boards found.</p>
        </div>
      ) : viewMode !== "grid" ? (
        <BoardsGridView />
      ) : (
        <BoardsListView />
      )}
    </>
  )
}
export default BoardsView
