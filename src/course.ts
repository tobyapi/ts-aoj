import axios from 'axios'
import { JUDGE_API_URL } from './constants'

export const get = async () => {
  const url = `${JUDGE_API_URL}/challenges`
  const response = await axios.get(url)
  return response
}

export const getByClassification = async (
  large_cl: string,
  middle_cl: string,
) => {
  const url = `${JUDGE_API_URL}/challenges/cl/${large_cl}/${middle_cl}`
  const response = await axios.get(url)
  return response
}

export const getCourse = async (flag: string, lang: string) => {
  const url = `${JUDGE_API_URL}/courses?filter=${flag}&lang=${lang}`
  const response = await axios.get(url)
  return response
}

export const getByCourseId = async (course_id: string, lang: string) => {
  const url = `${JUDGE_API_URL}/courses/${course_id}?lang=${lang}`
  const response = await axios.get(url)
  return response
}

export const getProblems = async (course_short_name: string) => {
  const url = `${JUDGE_API_URL}/problems/courses/${course_short_name}`
  const response = await axios.get(url)
  return response
}
