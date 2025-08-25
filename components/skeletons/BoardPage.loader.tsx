import { Skeleton } from "../ui/skeleton"
import KanbanLoader from "./Kanban.loader"

const BoardPageLoader = () => {
  return (
    <div className="flex flex-col min-w-screen container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div>
        <Skeleton className="w-full h-20 bg-gray-400" />
      </div>
      <KanbanLoader />
    </div>
  )
}
export default BoardPageLoader
