"use client"
import { ArrowRight } from "lucide-react"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import { Button } from "./ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUserName } from "@/store/persist.store"

const AuthUI = () => {
  return (
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
  )
}

const HomeUI = () => {
  const { userName } = useUserName()
  return (
    <>
      <span className="text-xs sm:text-sm text-gray-600 hidden md:block">
        Hi,
        {userName}
      </span>

      <Link href={"/dashboard"}>
        <Button size={"sm"} className="text-xs md:text-sm">
          Go to Dashboard <ArrowRight />
        </Button>
      </Link>
    </>
  )
}

const DashboardUI = () => {
  return <UserButton />
}

const HeaderContextUI = () => {
  const { isSignedIn } = useUser()
  const pathName = usePathname()
  const isHomePage = pathName === "/"

  return (
    <>
      {isSignedIn ? (
        <div className="flex flex-col sm:flex-row space-y-2 items-baseline space-x-2">
          {isHomePage ? <HomeUI /> : <DashboardUI />}
        </div>
      ) : (
        <AuthUI />
      )}
    </>
  )
}

export default HeaderContextUI
