"use server"

import axios from "axios"

export async function createGithubIssue({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  const REPO_OWNER = process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER
  const REPO_NAME = process.env.NEXT_PUBLIC_GITHUB_REPO_NAME

  if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
    throw new Error(
      "GitHub credentials are not configured in environment variables."
    )
  }

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`

  try {
    const response = await axios.post(
      url,
      {
        title,
        body: description,
      },
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    )
    return response.data
  } catch (error) {
    console.error("Failed to create GitHub issue:", error)
    throw new Error("Failed to create GitHub issue.")
  }
}
