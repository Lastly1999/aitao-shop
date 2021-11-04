import React, {ReactNode, useState} from 'react'
import {View, ScrollView, CoverView, CoverImage} from "@tarojs/components"
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
					return res.windowHeight - (40 + 150 + 39 + res.statusBarHeight)
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
		  <View className='shop-list'>
			  {props.list.map(item => {
				  return <View className='shop-list-item'>
					  <CoverImage className='shop-img' src={item.pict_url}/>
					  <View className='shop-title'>{item.title}</View>
				  </View>
			  })}
		  </View>
	  </ScrollView>
	)
}

export default ScrollList