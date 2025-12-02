import { Skeleton } from "./ui/skeleton"

const DroppableColumnAreas = ({
  children,
  isLoading,
}: {
  children: React.ReactNode
  isLoading: boolean
}) => {
  return (
    <div className="w-full lg:flex-shrink-0 lg:w-80">
      {isLoading ? <Skeleton className="border w-full h-full" /> : children}
    </div>
  )
}

export default DroppableColumnAreas
