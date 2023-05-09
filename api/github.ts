import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let data = req.query
  if(req.method === "POST") {
    data = req.query || req.body
  }
  try {
    const { user, repo, event_type, token } = data
    const result = await axios.post(
      `https://api.github.com/repos/${user}/${repo}/dispatches`,
      { event_type },
      {
        headers: {
          "User-Agent": "@elog/serverless-api",
          Accept: '*/*',
          Authorization: `token ${token}`,
        },
      }
    );
    return res.status(result.status).json({ message: result.data || 'Success!' })
  } catch (e) {
    return res.status(e.response?.status || 404).json({ message: e.message })
  }
}
