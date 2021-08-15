import axios from './axios-instance'
import { AxiosError } from 'axios'
import { ExtendedRequestOptions } from 'models/request-options'

const successHandler = (res: any) => res.data

const requestHandler = async(request: any) => {
  // Place for additional logic for modifying request e.g adding jwt token.
  return request
}

const responseHandler = async(response: any) => {
  // Place for additional logic for modifying response.
  return response
}

const handleResponseError = (error: AxiosError) => {
  // Place for adding handlers for common error responses.
  return Promise.reject(error)
}

axios.interceptors.request.use(requestHandler)

axios.interceptors.response.use(responseHandler, handleResponseError)

export const http = <T>(options: ExtendedRequestOptions<any>, responseMapper: Function = successHandler): Promise<T> => {
  return new Promise((resolve) => {
    const { url, method, body, headers, queryParams } = options
    axios.request<T>({
      url,
      method,
      data: body,
      headers,
      params: queryParams,
    }).then(res => resolve(responseMapper(res)))
  })
}
