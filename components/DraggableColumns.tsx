import { TResponseTask } from "@/lib/types"
import React from "react"
import { Badge } from "./ui/badge"
import ColumnEditUi from "./ColumnEditUI"

const DraggableColumns = ({
  children,
  data,
}: {
  children: React.ReactNode
  data: TResponseTask
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {data.title}
            </h3>
            <Badge variant={"secondary"} className="text-xs flex-shrink-0">
              {data.tasks.length}
            </Badge>
          </div>
          <div>
            <ColumnEditUi title={data.title} />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default DraggableColumns
