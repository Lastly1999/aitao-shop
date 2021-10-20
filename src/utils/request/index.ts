import Taro from "@tarojs/taro"

const API_URL = "http://127.0.0.1:5600/v1"

type RequestOptions = {
  path: string;
  method: keyof Taro.request.method;
  data: any
}

/**
 * 底层公用请求
 * @param options 
 * @returns 
 */
export const request = (options: RequestOptions) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `${API_URL}${options.path}`,
      method: options.method,
      data: options.data,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}