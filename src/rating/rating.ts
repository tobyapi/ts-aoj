import axios from 'axios'
import { JUDGE_API_URL } from '../constants'

export const getCategoryWeekly = async (user_id: string) => {
  const url = `${JUDGE_API_URL}/rating/users/${user_id}/weekly`
  const response = await axios.get(url)
  return response
}

export const getStatistics = async (user_id: string) => {
  const url = `${JUDGE_API_URL}/rating/users/${user_id}/statistics`
  const response = await axios.get(url)
  return response
}
