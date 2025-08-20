import { TGetTask } from "@/lib/schema"
import { Card, CardContent } from "./ui/card"
import { Calendar } from "lucide-react"
import { getPriorityColors } from "@/lib/colors"

const DraggableTask = ({ taskInfo }: { taskInfo: TGetTask }) => {
  return (
    <Card>
      <CardContent>
        <h4>{taskInfo.title}</h4>
        <p className="text-xs text-gray-600">
          {taskInfo.description ?? "No descrption"}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2 min-w-0 text-xs text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{taskInfo.due_date.toString()}</span>
          </div>
          <div>
            <div
              className={`${getPriorityColors(
                taskInfo.priority
              )} w-6 h-6 rounded-full flex items-center justify-center text-xs`}
            >
              {taskInfo.priority}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default DraggableTask
