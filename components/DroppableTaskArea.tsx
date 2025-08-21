import { CircleCheck } from "lucide-react"
import { useDroppable } from "@dnd-kit/react"

const DroppableTaskArea = ({
  children,
  isTasks,
  id,
}: {
  children: React.ReactNode
  isTasks: boolean
  id: number
}) => {
  const {
    ref,
    droppable: { isDropTarget },
  } = useDroppable({
    id: id,
  })
  return (
    <div
      className={`p-2 space-y-3 ${
        isDropTarget && "border-2 border-dashed border-green-500 rounded-lg"
      }`}
      ref={ref}
    >
      {!isTasks ? (
        <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
          Nothing yet <CircleCheck className="text-green-600 w-5 h-5" />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  )
}

export default DroppableTaskArea
