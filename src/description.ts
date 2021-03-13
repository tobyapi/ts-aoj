import axios from 'axios'
import { JUDGE_API_URL } from './constants'

export const getByProblemId = async (lang: string, problem_id: string) => {
  const url = `${JUDGE_API_URL}/resources/descriptions/${lang}/${problem_id}`
  const response = await axios.get(url)
  return response
}

export const getByImageName = async (name: string) => {
  const url = `${JUDGE_API_URL}/resources/image/${name}`
  const response = await axios.get(url)
  return response
}
