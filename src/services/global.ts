import {request} from "../utils/request/"

/**
 * 获取首页精选商品分类tabs
 */
export const getMaterialTabs = () => {
	return request({
		path: "/material/material",
		method: "GET"
	})
}