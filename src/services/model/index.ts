/**
 * 公共相应结构
 */
export type HttpResponse = {
	status: number;
	data: any;
	msg: string;
}

/**
 * 共用分页参数
 */
export interface Pager {
	pageSize: number;
	pageOn: number;
}