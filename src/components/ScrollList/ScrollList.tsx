import React, {ReactNode, useEffect, useState} from 'react'
import {View, ScrollView} from "@tarojs/components"
import {BaseEventOrig} from "@tarojs/components/types/common"
import Taro from "@tarojs/taro"

import {useReady} from "@tarojs/taro"

import "./index.scss"

type ScrollProps = {
	list: any[];
	children?: ((x: number) => ReactNode) | ReactNode;
}

const ScrollList: React.FC<ScrollProps> = (props) => {

	const [currentHeight, setCurrentHeight] = useState(0)

	useReady(() => {
		Taro.getSystemInfo({
			success: res => {
				setCurrentHeight(v => {
					return res.windowHeight - (40 + 150 + 30 + res.statusBarHeight)
				})
			}
		})
		.then(res => console.log(res))
	})

	const onScrollToUpper = (e: BaseEventOrig) => {
		console.log(e)
	}

	const onScroll = (e: BaseEventOrig) => {
		console.log(e)
	}

	const scrollTop = 20
	const Threshold = 20

	return (
	  <ScrollView
		className='scrollview'
		scrollY={true}
		style={{height: currentHeight}}
		scrollWithAnimation
		scrollTop={scrollTop}
		lowerThreshold={Threshold}
		upperThreshold={Threshold}
		onScrollToUpper={onScrollToUpper}
		onScroll={onScroll}
		enable-flex={true}
	  >
		  <View>
			  {props.list.map(item => {
				  return <View>{item.title}</View>
			  })}
		  </View>
	  </ScrollView>
	)
}

export default ScrollList