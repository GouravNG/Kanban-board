import { useTasksByColumnId } from "@/lib/hooks"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Calendar, Edit2 } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { TaskPriorities } from "@/lib/types"

type TColumn = {
  data: ReturnType<typeof useTasksByColumnId>
}

const Column: React.FC<TColumn> = ({ data }) => {
  const priorityClrs = (clr: TaskPriorities) => {
    switch (clr) {
      case "P1":
        return "bg-red-500"
      case "P2":
        return "bg-yellow-500"
      case "P3":
        return "bg-green-500"
      default:
        return "bg-green-500"
    }
  }

  return data.map((eachData, idx) => {
    if (eachData.isLoading) return <h1 key={idx + 1}>Loding...</h1>
    if (eachData.isError) return <h1 key={idx + 2}>Something went wrong!!</h1>
    if (eachData.data === undefined)
      return <h1 key={idx + 3}>No data found!!</h1>
    return (
      <div key={idx + 4} className="w-full lg:flex-shrink-0 lg:w-80">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-3 sm:p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                  {eachData.data[0].title}
                </h3>
                <Badge variant={"secondary"} className="text-xs flex-shrink-0">
                  {eachData.data[0].tasks.length}
                </Badge>
              </div>
              <Button variant={"ghost"} size={"sm"} className="flex-shrink-0">
                <Edit2 />
              </Button>
            </div>
          </div>
          {/* col content */}
          <div className="p-2 space-y-3">
            {eachData.data[0].tasks.map((i, idx) => {
              return (
                <div key={idx + 10}>
                  <Card>
                    <CardContent>
                      <div>
                        <h4>{i.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        {i.description ?? "No description."}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0 text-xs text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{i.due_date}</span>
                        </div>
                        <div
                          className={`${priorityClrs(
                            i.priority
                          )} w-6 h-6 rounded-full flex items-center justify-center text-xs`}
                        >
                          {i.priority}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  })
}
export default Column
