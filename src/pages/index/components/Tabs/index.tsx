import React, {ReactNode, useEffect, useState} from 'react'
import {View} from "@tarojs/components"
import {AtTabs, AtTabsPane} from 'taro-ui'
import "./index.scss"

type TabsProps = {
	list: ListItem[];
	change: (index: number) => void;
	current: number;
	children: ((x: number) => ReactNode) | ReactNode;
}

export type ListItem = {
	title: string;
	id: string;
}

const Tabs: React.FC<TabsProps> = (props) => {

	// tabs选中索引
	const [current, setCurrent] = useState(props.current)

	// 监听当前tabs选中索引
	useEffect(() => {
		setCurrent(props.current)
	}, [props.current])

	// tabs click事件
	const handleClick = (index: number) => {
		setCurrent(index)
		if (props.change) props.change(index)
	}

	return (
	  <AtTabs
		className='home-tabs'
		current={current}
		scroll
		tabList={props.list}
		onClick={handleClick}
	  >
		  <AtTabsPane current={current} index={0}>
			  <View>
				  {props.children}
			  </View>
		  </AtTabsPane>
	  </AtTabs>
	)
}

export default Tabs