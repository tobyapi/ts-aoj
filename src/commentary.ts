import axios from 'axios'
import { JUDGE_API_URL } from './constants'

export const get = async (
  display_lang: string,
  problem_id: string,
  pattern: string,
  type: number,
  filter: number,
) => {
  const url = `${JUDGE_API_URL}/resources/commentaries/${display_lang}/${problem_id}/${pattern}/${type}/${filter}`
  const response = await axios.get(url)
  return response
}

export const availableFilters = async (
  language: string,
  problem_id: string,
) => {
  const url = `${JUDGE_API_URL}/resources/commentaries/filters/${language}/${problem_id}`
  const response = await axios.get(url)
  return response
}
