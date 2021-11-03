import Taro from "@tarojs/taro"
import {HttpResponse} from "../../services/model";

const API_URL = "http://127.0.0.1:3690/v1"

type RequestOptions = {
	path: string;
	method: keyof Taro.request.method;
	data?: any
}

/**
 * 底层公用请求
 * @param options
 * @returns
 */
export const request = (options: RequestOptions) => {
	return new Promise<HttpResponse>((resolve, reject) => {
		Taro.request({
			url: `${API_URL}${options.path}`,
			method: options.method,
			data: options.data,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}