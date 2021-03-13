import axios from 'axios'
import { JUDGE_API_URL } from './constants'

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

interface SourceCode {
  judgeId: number
  userId: string
  problemId: string
  language: string
  cpuTime: number
  memory: number
  submissionDate: number
  policy: string
  sourceCode: string
  reviewed: number
}

type Submissions = Array<Submission>

export const post = async (
  problemId: string,
  language: string,
  sourceCode: string,
) => {
  const url = `${JUDGE_API_URL}/submissions`
  const response = await axios.post<Submissions>(url, {
    problemId: problemId,
    language: language,
    sourceCode: sourceCode,
  })
  return response
}

export const getRecent = async () => {
  const url = `${JUDGE_API_URL}/submission_records/recent`
  const response = await axios.get<Submissions>(url)
  return response
}

export const getByUserId = async (
  user_id: string,
  page: number,
  size: number,
) => {
  const params = `page=${page}&size=${size}`
  const url = `${JUDGE_API_URL}/submission_records/users/${user_id}?${params}`
  const response = await axios.get<Submissions>(url)
  return response
}

export const getByProblemId = async (
  problem_id: string,
  page: number,
  size: number,
) => {
  const params = `page=${page}&size=${size}`
  const url = `${JUDGE_API_URL}/submission_records/problems/${problem_id}?${params}`
  const response = await axios.get<Submissions>(url)
  return response
}

export const getByUserIdAndProblemId = async (
  user_id: string,
  problem_id: string,
  page: number,
  size: number,
) => {
  const params = `page=${page}&size=${size}`
  const url = `${JUDGE_API_URL}/submission_records/users/${user_id}/problems/${problem_id}?${params}`
  const response = await axios.get<Submissions>(url)
  return response
}

export const getSourceCode = async (judge_id: number) => {
  const url = `${JUDGE_API_URL}/reviews/${judge_id}`
  const response = await axios.get<SourceCode>(url)
  return response
}

export const getVerdict = async (judge_id: number) => {
  const url = `${JUDGE_API_URL}/verdicts/${judge_id}`
  const response = await axios.get(url)
  return response
}
