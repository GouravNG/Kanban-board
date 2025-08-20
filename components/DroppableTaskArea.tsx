import { CircleCheck } from "lucide-react"

const DroppableTaskArea = ({
  children,
  isTasks,
}: {
  children: React.ReactNode
  isTasks: boolean
}) => {
  return (
    <div className="p-2 space-y-3">
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
