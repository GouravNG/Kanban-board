"use client"

import { ArrowRight, SquareKanban } from "lucide-react"
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs"
import { Button } from "./ui/button"
import Link from "next/link"

const Header = () => {
  const { isSignedIn, user } = useUser()
  return (
    <header className="bg-white/80 border-b backdrop-blur-sm sticky z-50 top-0">
      <div className=" container py-3 sm:py-4 mx-auto flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <SquareKanban className="text-blue-600 " />
          <h1 className="font-bold text-xl sm:text-2xl text-gray-900">
            Kanban Board
          </h1>
        </div>

        {isSignedIn ? (
          <div className="flex flex-col sm:flex-row space-y-2 items-baseline space-x-2">
            <span className="text-xs sm:text-sm text-gray-600 hidden md:block">
              Hi,
              {user.username ||
                user.emailAddresses[0].emailAddress.split("@")[0]}
            </span>

            <Link href={"/dashboard"}>
              <Button size={"sm"} className="text-xs md:text-sm">
                Go to Dashboard <ArrowRight />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-2 sm:space-x-4">
            <SignInButton>
              <Button variant={"outline"} className="text-xs sm:text-sm">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button className="text-xs sm:text-sm">Sign up</Button>
            </SignUpButton>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
