import * as axios from 'axios'
interface ResWapper<T> {
  code: number | string
  message?: string
  msg?: string
  data: T
}
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<ResWapper<any>>
  }
}
