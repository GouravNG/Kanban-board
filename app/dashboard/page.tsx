"use client"

import BoardsView from "@/components/BoardsView"
import DashBoardUtils from "@/components/DashBoardUtils"
import DashBoardWidgets from "@/components/DashBoardWidgets"
import { useUser } from "@clerk/nextjs"

const Dashboard = () => {
  const { user, isLoaded, isSignedIn } = useUser()
  if (!isLoaded || user === undefined) return <h1>Loading..</h1>
  if (isLoaded && user !== undefined && isSignedIn)
    return (
      <main className="container mx-auto p-4 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Hi,
            {user?.username ||
              user?.emailAddresses[0].emailAddress.split("@")[0]}
          </h1>
          <p className="text-gray-600 text-sm">
            Here&apos;s what happening with your boards
          </p>
        </div>

        {/* Widgets */}
        <DashBoardWidgets />

        <div className="mb-6 sm:mb-8">
          {/* Utils */}
          <DashBoardUtils userId={user.id} />

          {/* Boards */}
          <BoardsView />
        </div>
      </main>
    )
}
export default Dashboard
