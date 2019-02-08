import axios from 'axios'
const baseURL = 'http://localhost:8080'

const request = (path, method = 'get', body = null) => {

  const token = localStorage.getItem('token')

  return axios(`${baseURL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    },
    data: body
  })
}

export default request