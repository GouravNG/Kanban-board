import queryClient from "@/lib/queryclient/axios.config"
import { AxiosError } from "axios"

// import { CreateBoardPayload } from "@/lib/types"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
  const apikey = req.headers.get("apikey")
  const anonkey = req.headers.get("publickey")
  // const data = (await req.json()) as CreateBoardPayload

  try {
    const boardRes = await queryClient.post(
      "/rest/v1/boards",
      {
        title: "Fist Board",
        user_id: "user_30wZ6xBPkItv1kkOw4zOVKWjpPt",
        description: "fist board",
        color: "bg-blue-300",
      },
      {
        headers: {
          apikey: anonkey,
          Authorization: `Bearer ${apikey}`,
        },
      }
    )

    console.log(boardRes.data)
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e)
    }
  }

  // const colRes = await queryClient.post("/rest/v1/columns", [
  //   {
  //     board_id: 3709,
  //     title: "Pending",
  //     sort_order: 0,
  //     user_id: "user_30wZ6xBPkItv1kkOw4zOVKWjpPt",
  //   },
  //   {
  //     board_id: 3709,
  //     title: "Inprogress",
  //     sort_order: 1,
  //     user_id: "user_30wZ6xBPkItv1kkOw4zOVKWjpPt",
  //   },
  //   {
  //     title: "Completed",
  //     sort_order: 2,
  //     user_id: "user_30wZ6xBPkItv1kkOw4zOVKWjpPt",
  //   },
  // ])

  return NextResponse.json({ msg: "success" })
}

export const GET = async (req: NextRequest) => {
  const apikey = req.headers.get("apikey")
  const res = await queryClient.get("/rest/v1/boards", {
    headers: {
      Authorization: `Bearer ${apikey}`,
      "Content-Type": "application/json",
    },
  })

  return NextResponse.json(res.data)
}
