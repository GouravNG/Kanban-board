import { Skeleton } from "../ui/skeleton"

const SkeletonBoards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <Skeleton key={index + 1} className="w-full h-[300] bg-gray-200" />
        )
      })}
    </div>
  )
}

export default SkeletonBoards
