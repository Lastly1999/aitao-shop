import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'

import { BaseEventOrig } from "@tarojs/components/types/common"

// components
import NavBar from '../../components/NavBar/index'
import ScrollList from "../../components/ScrollList/ScrollList"
import GridMenu from "./components/GridMenu"
import Tabs, { ListItem } from "./components/Tabs"

// utils
import { syncListData } from "../../utils/sync"


import './index.scss'
import { getMaterialTabs } from "../../services/global"
import { HttpResponse } from "../../services/model"
import { getCategories, ICategorieParams } from "../../services/categories"

const Index: React.FC = () => {

	// 系统剩余可用高度
	const [sysSaveHeight, setSysSaveHeight] = useState<string | undefined>()

	// tabs数据
	const [tabList, setTabList] = useState<ListItem[]>([])

	// tabs选中索引
	const [tabsCurrent, setTabsCurrent] = useState(0)

	// 精选商品列表
	const [ctegories, setCategories] = useState([])

	// 精选商品请求
	const [ctegoriesParmas, setCtegoriesParmas] = useState<ICategorieParams>({
		pageSize: 10,
		pageOn: 1,
		materialId: ''
	})

	// 长列表下拉的加载状态
	const [refresherStatus, setRefresherStatus] = useState<boolean>(false)

	// 请求状态
	const [doneLoading, setDoneLoading] = useState<boolean>(false)

	useEffect(() => {
		getTabs()
	}, [])

	useEffect(() => {
		ctegoriesParmas.materialId && getReCommoditys()
	}, [ctegoriesParmas])

	// tabs change事件
	const tabsChange = async (index: number) => {
		setCategories([])
		setCtegoriesParmas({
			pageSize: 10,
			pageOn: 1,
			materialId: tabList[index].mId
		})
	}

	// 长列表触底事件
	const scrollOnTower = async (e: BaseEventOrig) => {
		setCtegoriesParmas((val: ICategorieParams) => {
			return {
				...val,
				pageOn: val.pageOn += 1
			}
		})
	}

	// 长列表下拉刷新事件
	const listOnRefresh = async (e: BaseEventOrig) => {
		if (refresherStatus) return
		// 清空数据
		setCategories([])
		// 进入加载状态
		setRefresherStatus(true)
		// 列表数据复位
		setCtegoriesParmas(val => ({ ...val, pageOn: 1 }))
	}

	/**
	 * 请求tabs数据
	 */
	const getTabs = async () => {
		const res: HttpResponse = await getMaterialTabs()
		const sync = await syncListData(res.data, { title: 'materialName', id: 'materialId' })
		setTabList(sync)
		ctegoriesParmas.materialId = sync[0].mId
		await setCtegoriesParmas({
			pageSize: 10,
			pageOn: 1,
			materialId: sync[tabsCurrent].mId
		})
	}

	/**
	 * 请求精选商品数据
	 */
	const getReCommoditys = async (index = tabsCurrent) => {
		if (doneLoading) return
		setDoneLoading(true)
		const res: HttpResponse = await getCategories(ctegoriesParmas)
		await setCategories(val => {
			return [...val, ...res.data.commodits]
		})
		setDoneLoading(false)
		setRefresherStatus(false)
	}

	return (
		<View className='index'>
			<NavBar />
			<GridMenu />
			<Tabs list={tabList} current={tabsCurrent} change={tabsChange}>
				<ScrollList loading={doneLoading} list={ctegories} refresherStatus={refresherStatus} onToLower={scrollOnTower} onRefresh={listOnRefresh} />
			</Tabs>
		</View>
	)
}

export default Index