export type SyncOptions = {
	title: string;
	id: string;
}
/**
 * 列表数据重构
 * @param sourceData
 * @param syncObj
 */
export const syncListData = (sourceData: any, syncObj: SyncOptions) => {
	return sourceData.map((item: any) => {
		return {
			...item,
			title: item[syncObj.title],
			mId: item[syncObj.id]
		}
	})
}