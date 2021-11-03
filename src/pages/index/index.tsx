import React, {useState, useEffect, ReactNode} from 'react'
import {View} from '@tarojs/components'

// components
import NavBar from '../../components/NavBar/index'
import ScrollList from "../../components/ScrollList/ScrollList"
import GridMenu from "./components/GridMenu"
import Tabs, {ListItem} from "./components/Tabs"

// utils
import {syncListData} from "../../utils/sync"


import './index.scss'
import {getMaterialTabs} from "../../services/global"
import {HttpResponse} from "../../services/model"
import {getCategories, ICategorieParams} from "../../services/categories"

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

	useEffect(() => {
		getTabs()
	}, [])

	useEffect(() => {
		ctegoriesParmas.materialId && getReCommoditys()
	}, [ctegoriesParmas.materialId])

	// tabs change事件
	const tabsChange = (index: number) => {

	}

	/**
	 * 请求tabs数据
	 */
	const getTabs = async () => {
		const res: HttpResponse = await getMaterialTabs()
		const sync = await syncListData(res.data, {title: 'materialName', id: 'materialId'})
		setTabList(sync)
		ctegoriesParmas.materialId = sync[0].mId
		setCtegoriesParmas({
			pageSize: 100,
			pageOn: 1,
			materialId: sync[tabsCurrent].mId
		})
	}

	/**
	 * 请求精选商品数据
	 */
	const getReCommoditys = async (index = tabsCurrent) => {
		const res: HttpResponse = await getCategories(ctegoriesParmas)
		setCategories(res.data.commodits)
		console.log(res)
		console.log(tabList)
	}

	return (
	  <View className='index'>
		  <NavBar/>
		  <GridMenu/>
		  <Tabs list={tabList} current={tabsCurrent} change={tabsChange}>
			  <ScrollList list={ctegories}/>
		  </Tabs>
	  </View>
	)
}

export default Index