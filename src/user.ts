import axios from 'axios'
import { AOJ_URL } from './constants'

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

export const get = async (user_id: string) => {
  const response = await axios.get<User>(`${AOJ_URL}/users/${user_id}`)
  return response.data
}
