// request.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const service = axios.create({
 timeout: 60000,
 baseURL: ''
})

// 请求失败回调函数处理
const error = (error: { request: AxiosRequestConfig, response: AxiosResponse }) => {
 if (error.response.status === 401) {
 // 登录状态过期或未登录
  }
 return Promise.reject(error)
}

// 请求前
service.interceptors.request.use((request: AxiosRequestConfig) => {
 return request
}, error)

// 响应后
service.interceptors.response.use((response: AxiosResponse) => {
 return response
}, error)

export { service as axios }
