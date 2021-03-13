import axios from 'axios'
import { JUDGE_DAT_URL, Contest } from '../constants'

export const contests = async () => {
  const url = `${JUDGE_DAT_URL}/rating/rankings/contests`
  const response = await axios.get(url)
  return response
} 

export const languages = async () => {
  const url = `${JUDGE_DAT_URL}/rating/rankings/languages`
  const response = await axios.get(url)
  return response
}

export const contributions = async () => {
  const url = `${JUDGE_DAT_URL}/rating/rankings/contributions`
  const response = await axios.get(url)
  return response
}

export const get = async () => {
  const url = `${JUDGE_DAT_URL}/rating/rankings`
  const response = await axios.get(url)
  return response
}

export const getByContest = async (contest: Contest) => {
  const url = `${JUDGE_DAT_URL}/rating/rankings/contests/${contest}`
  const response = await axios.get(url)
  return response
}

export const getByLanguage = async (language: string) => {
  const url = `${JUDGE_DAT_URL}/rating/rankings/contests/${language}`
  const response = await axios.get(url)
  return response
}

export const getByContribution = async (contribution: string) => {
  const url = `${JUDGE_DAT_URL}/rating/rankings/contributions/${contribution}`
  const response = await axios.get(url)
  return response
}