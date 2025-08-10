"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useBoardsCount } from "@/lib/hooks"
import { useUser } from "@clerk/nextjs"
import { KanbanIcon, PlusCircleIcon } from "lucide-react"

const Dashboard = () => {
  const { user } = useUser()
  const { data: boardCount, isLoading } = useBoardsCount()
  return (
    <main className="container mx-auto p-4 sm:py-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Hi,
          {user?.username || user?.emailAddresses[0].emailAddress.split("@")[0]}
        </h1>
        <p className="text-gray-600">
          Here&apos;s what happening with your boards
        </p>
        <Button className="w-full sm:w-auto ">
          Create new Dashboard <PlusCircleIcon className="w-4 h-4 mr-2" />
        </Button>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Total
                </p>
                {isLoading ? (
                  <div className="h-5 w-5 rounded-sm bg-gray-200 animate-pulse"></div>
                ) : (
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {boardCount}
                  </p>
                )}
              </div>
              <div className="h-10 w-10 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <KanbanIcon className="h-5 w-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
export default Dashboard
