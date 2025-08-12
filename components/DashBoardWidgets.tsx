import { KanbanIcon, Rocket } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { useBoardsCount, useBoardsActivity } from "@/lib/hooks"

type TCardWidget = {
  title: string
  value: string | number
  isLoading: boolean
  color: string
  Icon: React.ElementType
}

export const CardWidget: React.FC<TCardWidget> = ({
  title,
  value,
  isLoading,
  color,
  Icon,
}) => {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              {title}
            </p>
            {isLoading ? (
              <div className="h-5 w-5 rounded-sm bg-gray-200 animate-pulse" />
            ) : (
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {value}
              </p>
            )}
          </div>
          <div
            className={`h-10 w-10 sm:h-12 ${color} rounded-lg flex items-center justify-center`}
          >
            {<Icon />}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const DashBoardWidgets = () => {
  const { data: boardsCount, isLoading: isBoardsCountLoading } =
    useBoardsCount()
  const { isLoading: isRecentActivitiesLoading, data: recentActivity } =
    useBoardsActivity()

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {boardsCount !== undefined && (
        <CardWidget
          isLoading={isBoardsCountLoading}
          title="Total Boards"
          value={boardsCount}
          key={"board-count"}
          color="bg-blue-100"
          Icon={KanbanIcon}
        />
      )}
      {recentActivity !== undefined && (
        <CardWidget
          isLoading={isRecentActivitiesLoading}
          title="Recent Activities"
          value={recentActivity}
          key={"recent-activity"}
          color="bg-green-100"
          Icon={Rocket}
        />
      )}
    </div>
  )
}

export default DashBoardWidgets
