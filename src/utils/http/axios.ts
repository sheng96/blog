import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import axios from 'axios'
import { userStore } from '@/store/modules/user'
import { checkStatus } from '@/utils/checkStatus'

const instance = axios.create({
  baseURL: '',
  timeout: 10000
})
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const store = userStore()
    if (store.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      ;(
        config.headers as AxiosRequestHeaders
      ).Authorization = `Bearer ${store.token}`
    }

    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  (error) => {
    console.log(error)
    const response = error.response
    if (response.status >= 400) {
      const data = response?.data
      checkStatus(
        data?.code || response.status,
        data.message || response.message
      )
    }

    return Promise.reject(error)
  }
)

export default instance
