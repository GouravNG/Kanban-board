import axios from "axios"
import { getHeaders } from "./utils"
import { TBoards } from "../types"

const API_BOARD = "/api/board"

export const createBoard = async (requestBody: unknown) => {
  try {
    const res = await fetch(API_BOARD, {
      method: "POST",
      ...getHeaders(),
      body: JSON.stringify(requestBody),
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message)
    }
  }
}

export const getBoards = async () => {
  const res = await axios.get<TBoards>(API_BOARD, {
    ...getHeaders(),
  })
  return res.data
}
