import axios from 'axios'
import { JUDGE_API_URL } from './constants'

export interface User {
  id: string
  name: string
  affiliation: string
  registerDate: number
  lastSubmitDate: number
  policy: string
  country: string
  birthYear: number
  displayLanguage: string
  avator: string
  defaultProgrammingLanguage: string
  status: Status
  url: string
}

interface Status {
  submittions: number
  solved: number
  accepted: number
  wrongAnswer: number
  timeLimit: number
  memoryLimit: number
  outputLimit: number
  compileError: number
  runtimeError: number
}

export const register = async (
  user_id: string,
  password: string,
  name: string,
  affiliation: string | null = null,
  mail: string | null = null,
  policy: string = 'private',
  url: string | null = null,
  country: string = 'JP',
) => {
  const body = {
    user_id: user_id,
    password: password,
    name: name,
    affiliation: affiliation,
    mail: mail,
    policy: policy,
    url: url,
    country: country,
  }
  const response = await axios.post(`${JUDGE_API_URL}/users`, body)
  return response
}

export const get = async (user_id: string) => {
  const response = await axios.get<User>(`${JUDGE_API_URL}/users/${user_id}`)
  return response
}

export const all = async (page: number, size: number) => {
  const response = await axios.get(
    `${JUDGE_API_URL}/users?page=${page}&size=${size}`,
  )
  return response
}

export const ordeBySolved = async (page: number, size: number) => {
  const url = `${JUDGE_API_URL}/users/ranking/solved?page=${page}&size=${size}`
  const response = await axios.get(url)
  return response
}

export const ordeByRating = async (page: number, size: number) => {
  const url = `${JUDGE_API_URL}/users/ranking/rating?page=${page}&size=${size}`
  const response = await axios.get(url)
  return response
}
