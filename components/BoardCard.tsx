import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"
import { TGetBoard } from "@/lib/types"

export const BoardsCard = ({ board }: { board: TGetBoard }) => {
  const isNew =
    Date.now() - new Date(board.created_at).getTime() < 7 * 24 * 60 * 60 * 1000
  return (
    <Link href={`/boards/${board.id}`} prefetch={false}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`w-4 h-4 rounded-full ${board.color}`} />
            {isNew && (
              <Badge variant={"secondary"} className="text-xs">
                New
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          <CardTitle
            className={`text-base  sm:text-lg group-hover:text-blue-500 transition-colors`}
          >
            {board.title}
          </CardTitle>

          <CardDescription className="text-sm mb-4 truncate">
            {board.description || "No Description"}
          </CardDescription>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs space-y-1 text-gray-500 sm:space-y-0">
            <span>
              Created: {new Date(board.created_at).toLocaleDateString()}
            </span>
            <span>
              Updated: {new Date(board.updated_at).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
export default BoardsCard
