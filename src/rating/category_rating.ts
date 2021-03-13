import axios from 'axios'
import { JUDGE_API_URL } from '../constants'

export const getByUserId = async (user_id: string) => {
  const url = `${JUDGE_API_URL}/rating/users/${user_id}/category`
  const response = await axios.get(url)
  return response
}

export const getByProblemId = async (problem_id: string) => {
  const url = `${JUDGE_API_URL}/rating/problems/${problem_id}/category`
  const response = await axios.get(url)
  return response
}
