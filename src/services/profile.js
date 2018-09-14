import { axiosPublicInstance } from './axiosInstance'

export function getSkillsData () {
  return axiosPublicInstance.get('/profile/skills')
}
