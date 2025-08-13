"use client"

import BoardsView from "@/components/BoardsView"
import DashBoardUtils from "@/components/DashBoardUtils"
import DashBoardWidgets from "@/components/DashBoardWidgets"
import CreateBoardForm from "@/components/Forms/Board.form"
import { useUser } from "@clerk/nextjs"

const Dashboard = () => {
  const { user, isLoaded } = useUser()
  if (!isLoaded || user === undefined) return <h1>Loading..</h1>
  if (isLoaded && user !== undefined)
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
          <DashBoardUtils />

          {/* Boards */}
          <BoardsView />

          {/* Forms */}
        </div>
        {<CreateBoardForm user_id={user?.id ?? ""} />}
      </main>
    )
}
export default Dashboard
