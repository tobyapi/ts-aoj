import axios from 'axios'
import { AOJ_URL } from './constants'

export const get = async () => {
  const url = `${AOJ_URL}/challenges`
  const response = await axios.get(url)
  return response
}

export const getByClassification = async (large_cl: string, middle_cl: string) => {
  const url = `${AOJ_URL}/challenges/cl/${large_cl}/${middle_cl}`
  const response = await axios.get(url)
  return response
}

export const getCourse = async (flag: string, lang: string) => {
  const url = `${AOJ_URL}/courses?filter=${flag}&lang=${lang}`
  const response = await axios.get(url)
  return response
}

export const getByCourseId = async (course_id: string, lang: string) => {
  const url = `${AOJ_URL}/courses/${course_id}?lang=${lang}`
  const response = await axios.get(url)
  return response
}

export const getProblems = async (course_short_name: string) => {
  const url = `${AOJ_URL}/problems/courses/${course_short_name}`
  const response = await axios.get(url)
  return response
}