import axios from 'axios'
import { JUDGE_API_URL } from './constants'

interface Description {
  language: string,
  html: string,
  commentaries: [],
  solvedUser: number,
  successRate: number,
  score: number,
  recommend: number,
  recommendations: number,
  bookmarks: [],
  isSolved: boolean,
  source: string,
  problem_id: string,
  time_limit: number,
  memory_limit: number,
  created_at: number,
  server_time: number
}

export const getByProblemId = async (lang: string, problem_id: string) => {
  const url = `${JUDGE_API_URL}/resources/descriptions/${lang}/${problem_id}`
  const response = await axios.get<Description>(url)
  return response
}

export const getByImageName = async (name: string) => {
  const url = `${JUDGE_API_URL}/resources/image/${name}`
  const response = await axios.get(url)
  return response
}
