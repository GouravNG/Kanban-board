import { Skeleton } from "../ui/skeleton"

const KanbanLoader = () => {
  return (
    <div className="w-full h-96 mt-4 flex flex-col lg:flex-row gap-2">
      {Array.from({ length: 4 }).map((_, idx) => {
        return <Skeleton key={idx + 2} className="border h-40 lg:h-96 w-full" />
      })}
    </div>
  )
}
export default KanbanLoader
