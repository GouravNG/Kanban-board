import { useGetAllColumnIds, useTasksByColumnId } from "@/lib/hooks"
import { useBoardId } from "@/store/persist.store"
import DroppableColumnAreas from "./DroppableColumnArea"
import DraggableColumns from "./DraggableColumns"
import DroppableTaskArea from "./DroppableTaskArea"
import DraggableTask from "./DraggableTasks"

const Draggable = () => {
  const { boardId } = useBoardId()
  const { data: columsIdArray } = useGetAllColumnIds(String(boardId))
  const data = useTasksByColumnId(columsIdArray!)

  return data.map((columns, idx) => {
    return (
      <DroppableColumnAreas key={idx + 1} isLoading={columns.isLoading}>
        <DraggableColumns data={columns.data!}>
          <DroppableTaskArea isTasks={!!columns.data?.tasks.length}>
            {columns.data?.tasks.map((taskInfo) => {
              return <DraggableTask taskInfo={taskInfo} key={taskInfo.id} />
            })}
          </DroppableTaskArea>
        </DraggableColumns>
      </DroppableColumnAreas>
    )
  })
}
export default Draggable
