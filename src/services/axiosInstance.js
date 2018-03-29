import axios from 'axios'

// Private Instance ------

// let privateInstance = axios.create({
//   baseURL: '/api'
// })

// // set up interceptors here (eg - 401 detection)
// privateInstance.interceptors.response.use((response) => {

// }, (error) => {

// })

// export const axiosPrivateInstance = privateInstance

// Public Instance --------

let publicInstance = axios.create({
  baseURL: '/api'
})

export const axiosPublicInstance = publicInstance
