import React, { ReactNode, useEffect, useState } from 'react'
import { View, ScrollView } from "@tarojs/components"
import { BaseEventOrig } from "@tarojs/components/types/common"
import Taro, { useReady } from "@tarojs/taro"

import { AtActivityIndicator } from 'taro-ui'



import "./index.scss"

type ScrollProps = {
  list: any[];
  refresherStatus: boolean;
  children?: ((x: number) => ReactNode) | ReactNode;
  loading: boolean;
  onToLower: (e: BaseEventOrig) => void;
  onRefresh: (e: BaseEventOrig) => void;
}

const ScrollList: React.FC<ScrollProps> = (props) => {

  const [currentHeight, setCurrentHeight] = useState<number>(0)
  const [refresherStatus, setrRefresherStatus] = useState<boolean>(false)
  const [dataLoading, setDataLoading] = useState<boolean>(false)

  useEffect(() => {
    setrRefresherStatus(props.refresherStatus)
  }, [props.refresherStatus])

  useEffect(() => {
    console.log(props.list)
  }, [props.list])

  useEffect(() => {
    setDataLoading(props.loading)
  }, [props.loading])

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

  const onScrollToLower = (e: BaseEventOrig) => {
    if (props.onToLower) props.onToLower(e)
  }

  // 自定义下拉刷新被触发
  const onRefresh = (event: BaseEventOrig): any => {
    if (props.onRefresh) props.onRefresh(event)
  }

  const scrollTop = 20

  return (
    <ScrollView
      className='scrollview'
      scrollY
      style={{ height: currentHeight }}
      scrollWithAnimation
      scrollTop={scrollTop}
      lowerThreshold={1}
      upperThreshold={10}
      onScrollToLower={onScrollToLower}
      enable-flex
      refresherTriggered={refresherStatus}
      refresherEnabled
      onRefresherRefresh={onRefresh}
    >
      <View className='shop-list'>
        {props.list.map((item, index) => {
          return <View className='shop-list-item' key={index}>
            <View style={{
              background: `url(${item.pict_url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: 'contain'
            }} className='shop-list-img'
            />
            <View className='shop-title'>{item.title}</View>
          </View>
        })}
      </View>
      {
        dataLoading &&
        <View className='loading-name'><AtActivityIndicator content='正在玩命加载中...'>
          </AtActivityIndicator>
        </View>
      }
    </ScrollView>
  )
}

export default ScrollList