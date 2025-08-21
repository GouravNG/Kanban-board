import { TGetTask } from "@/lib/schema"
import { Card, CardContent } from "./ui/card"
import { Calendar } from "lucide-react"
import { getPriorityColors } from "@/lib/colors"
import { useDraggable } from "@dnd-kit/react"
import TaskEdit from "./Task-EditUI"

const DraggableTask = ({ taskInfo }: { taskInfo: TGetTask }) => {
  const { ref } = useDraggable({
    id: taskInfo.id,
  })
  return (
    <Card ref={ref}>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <h4>{taskInfo.title}</h4>
            <p className="text-xs text-gray-600">
              {taskInfo.description ?? "No descrption"}
            </p>
          </div>
          <TaskEdit data={taskInfo} />
        </div>

        <div className="flex items-center justify-between mt-4">
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
