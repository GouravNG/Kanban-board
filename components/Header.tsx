import { SquareKanban } from "lucide-react"
import HeaderContextUI from "./Header-contextui"
import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white/80 border-b backdrop-blur-sm sticky z-50 top-0">
      <div className=" container py-3 sm:py-4 mx-auto flex items-center justify-between">
        <Link href={"/"} className="flex space-x-2 items-center">
          <SquareKanban className="text-blue-600" />
          <h1 className="font-bold text-xl sm:text-2xl text-gray-900">
            Knbn Board
          </h1>
        </Link>
        <HeaderContextUI />
      </div>
    </header>
  )
}
export default Header
