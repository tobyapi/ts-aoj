import axios from 'axios'
import { AOJ_URL } from './constants'

export const getByProblemId = async (lang: string, problem_id: string) => {
  const url = `${AOJ_URL}/resources/descriptions/${lang}/${problem_id}`
  const response = await axios.get(url)
  return response
}

export const getByImageName = async (name: string) => {
  const url = `${AOJ_URL}/resources/image/${name}`
  const response = await axios.get(url)
  return response
}
