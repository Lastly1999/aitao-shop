import Taro from "@tarojs/taro";

const NAVIGATOR_HEIGHT = 44
const TAB_BAR_HEIGHT = 50

/**
 * 返回屏幕可用高度
 * // NOTE 各端返回的 windowHeight 不一定是最终可用高度（例如可能没减去 statusBar 的高度），需二次计算
 * @param classList
 */
export function getWindowHeight(classList: string[]): Promise<string> {
	return new Promise((resolve, reject) => {
		let systemHeight = 0
		classList.map((item: string) => {
			Taro.createSelectorQuery().select(item).fields({
				dataset: true,
				size: true,
				scrollOffset: true,
				properties: ['scrollX', 'scrollY']
			}, function (res) {
				systemHeight += res.height  // 节点的高度
			}).exec()
		})
		resolve(`${systemHeight}px`)
	})

}