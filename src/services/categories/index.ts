import {request} from "../../utils/request"
import {Pager} from "../model"

export interface ICategorieParams extends Pager {
	materialId: string;
}

/**
 * 获取精选商品
 * @param categorieParams
 */
export const getCategories = (categorieParams: ICategorieParams) => {
	return request({
		path: '/commodity/featured',
		method: 'POST',
		data: categorieParams
	})
}