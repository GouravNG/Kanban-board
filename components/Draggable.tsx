import {
  useGetAllColumnIds,
  useTasksByColumnId,
  useUpdateTaskOnDND,
} from "@/lib/hooks"
import { useBoardId } from "@/store/persist.store"
import DroppableColumnAreas from "./DroppableColumnArea"
import DraggableColumns from "./DraggableColumns"
import DroppableTaskArea from "./DroppableTaskArea"
import DraggableTask from "./DraggableTasks"
import { DragDropProvider, PointerSensor } from "@dnd-kit/react"

import { useState } from "react"

const Draggable = () => {
  const [taskId, setTaskId] = useState<string>("0")
  const [columnId, setColumnId] = useState<string>("0")

  const { boardId } = useBoardId()
  const { data: columsIdArray } = useGetAllColumnIds(String(boardId))
  const data = useTasksByColumnId(columsIdArray!)
  const { mutate } = useUpdateTaskOnDND(taskId)
  const sensor = PointerSensor.configure({
    activationConstraints: {
      distance: {
        value: {
          x: 15,
        },
      },
      delay: {
        value: 250,
        tolerance: 5,
      },
    },
  })

  // on drag start
  const handleDragStart = (t_id: string) => {
    setTaskId(t_id)
  }

  // on drag end
  const handleDragEnd = (c_id: number) => {
    mutate({ column_id: c_id })
  }

  return (
    <DragDropProvider
      onDragStart={(e) => {
        setColumnId(e.operation.target?.id as string)

        handleDragStart(e.operation.source?.id as string)
      }}
      onDragEnd={(e) => {
        if (e.canceled) return null
        if (columnId === e.operation.target?.id) return null

        handleDragEnd(e.operation.target?.id as number)
      }}
      sensors={[sensor]}
    >
      {data.map((columns, idx) => {
        return (
          <DroppableColumnAreas key={idx + 1} isLoading={columns.isLoading}>
            <DraggableColumns data={columns.data!}>
              <DroppableTaskArea
                isTasks={!!columns.data?.tasks.length}
                id={columns.data?.id ?? 0}
              >
                {columns.data?.tasks.map((taskInfo) => {
                  return <DraggableTask taskInfo={taskInfo} key={taskInfo.id} />
                })}
              </DroppableTaskArea>
            </DraggableColumns>
          </DroppableColumnAreas>
        )
      })}
    </DragDropProvider>
  )
}
export default Draggable
