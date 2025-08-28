import { useBoards } from "@/lib/hooks"
import { BoardsCard } from "./BoardCard"

const BoardsListView = () => {
  const { data } = useBoards()
  if (data)
    return (
      <div>
        {data.map((boards, index) => {
          return (
            <div key={boards.id} className={index > 0 ? "mt-2" : "mt-0"}>
              <BoardsCard board={boards} />
            </div>
          )
        })}
      </div>
    )
}

export default BoardsListView
