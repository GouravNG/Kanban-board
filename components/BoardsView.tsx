import { useBoards } from "@/lib/hooks"
import { useViewToggles } from "@/store/persist.store"
import BoardsGridView from "@/components/Boards-gridview"
import BoardsListView from "@/components/Boards-listview"
import SkeletonBoards from "./skeletons/Boards.skeletons"

const BoardsView = () => {
  const { data, isLoading, error } = useBoards()
  const { viewMode } = useViewToggles()

  if (isLoading) return <SkeletonBoards />
  if (error) return <h1>Error fetching your boards..</h1>

  return (
    <>
      {data && data.length === 0 ? (
        <p>No Boards yet...</p>
      ) : viewMode !== "grid" ? (
        <BoardsGridView />
      ) : (
        <BoardsListView />
      )}
    </>
  )
}
export default BoardsView
