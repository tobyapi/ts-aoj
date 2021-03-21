import axios from 'axios'
import { JUDGE_API_URL } from './constants'

export const allCategory = async () => {
  const url = `${JUDGE_API_URL}/problems/categories`
  const response = await axios.get(url)
  return response
}

export const getByCategory = async (categoryId: string) => {
  const url = `${JUDGE_API_URL}/problems/categories/${categoryId}`
  const response = await axios.get(url)
  return response
}
