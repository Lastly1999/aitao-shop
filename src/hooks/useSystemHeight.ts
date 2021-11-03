import {useState} from "react"
import Taro from '@tarojs/taro'

const NAVIGATOR_HEIGHT = 44
const TAB_BAR_HEIGHT = 50

/**
 * 返回屏幕可用高度
 * // NOTE 各端返回的 windowHeight 不一定是最终可用高度（例如可能没减去 statusBar 的高度），需二次计算
 * @param {*} showTabBar
 */
const useSystemHeight = (showTabBar = true) => {
	const info = Taro.getSystemInfoSync()
	const [saveHeight, setSaveHeight] = useState<number>(0)
	const {windowHeight, statusBarHeight} = info
	const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0

	if (process.env.TARO_ENV === 'rn') {
		setSaveHeight(windowHeight - tabBarHeight)
	}

	if (process.env.TARO_ENV === 'weapp') {
		console.log(windowHeight - tabBarHeight)
		setSaveHeight(windowHeight - tabBarHeight)
	}

	return {
		saveHeight
	}
}

export default useSystemHeight