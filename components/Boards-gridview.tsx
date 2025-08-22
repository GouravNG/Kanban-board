import { useBoards } from "@/lib/hooks/useBoards.hook"
import { BoardsCard } from "./BoardCard"

const BoardsGridView = () => {
  const { data } = useBoards()

  if (data)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {data.map((boards) => {
          return <BoardsCard board={boards} key={boards.id} />
        })}
      </div>
    )
}

export default BoardsGridView
