import axios from 'axios'
import { AOJ_URL } from './constants'

interface Submission {
  judgeId: number
  judgeType: number
  userId: string
  problemId: string
  submissionDate: number
  language: string
  status: number
  cpuTime: number
  memory: number
  codeSize: number
  accuracy: string
  judgeDate: number
  score: number
  problemTitle: string | null
  token: string | null
}

type Submissions = Array<Submission>

export const getByUserId = async (
  user_id: string,
  page: number,
  size: number,
) => {
  const params = `page=${page}&size=${size}`
  const url = `${AOJ_URL}/submission_records/users/${user_id}?${params}`
  const response = await axios.get<Submissions>(url)
  return response
}

export const getRecent = async () => {
  const url = `${AOJ_URL}/submission_records/recent`
  const response = await axios.get<Submissions>(url)
  return response
}
