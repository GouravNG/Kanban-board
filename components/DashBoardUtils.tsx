import { useViewToggles } from "@/store/persist.store"
import { Button } from "./ui/button"
import { FilterIcon, Grid3X3, List, SearchIcon } from "lucide-react"
import { Input } from "./ui/input"
import CreateBoardForm from "./Forms/Board.form"

const SearchBar = () => {
  return (
    <div className="relative mb-4 sm:mb-6">
      <SearchIcon className="absolute left-4 top-1/2 transform -translate-1/2 h-4 w-4 text-gray-400" />
      <Input
        id="search "
        placeholder="Search your boards..."
        className="pl-10"
      />
    </div>
  )
}

const ViewModes = () => {
  const { viewMode, toggleViewMode } = useViewToggles()

  return (
    <div className="flex items-center space-x-2 bg-white border rounded-lg p-1">
      <Button
        variant={viewMode === "grid" ? "ghost" : "default"}
        onClick={toggleViewMode}
        size={"sm"}
      >
        <Grid3X3 />
      </Button>
      <Button
        variant={viewMode === "grid" ? "default" : "ghost"}
        onClick={toggleViewMode}
        size={"sm"}
      >
        <List />
      </Button>
    </div>
  )
}

const DashBoardUtils = ({ userId }: { userId: string }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Your Boards
          </h2>
          <p className="text-gray-600 text-sm">Manage your projects and task</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 space-x-2">
          <ViewModes />
          <Button variant={"outline"} size={"sm"}>
            <FilterIcon /> Filter
          </Button>
          <CreateBoardForm user_id={userId} />
        </div>
      </div>

      <SearchBar />
    </>
  )
}
export default DashBoardUtils
