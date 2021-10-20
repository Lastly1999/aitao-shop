import React, { useState } from 'react'
import { View } from "@tarojs/components"
import { AtTabs, AtTabsPane } from 'taro-ui'
import "./index.scss"

export default function Tabs() {

  const [current, setCurrent] = useState(0)

  const handleClick = (index: number) => {
    console.log(index)
  }

  return (
    <AtTabs
      current={current}
      scroll
      tabList={[
        { title: '标签页1' },
        { title: '标签页2' },
        { title: '标签页3' },
        { title: '标签页4' },
        { title: '标签页5' },
        { title: '标签页6' }
      ]}
      onClick={handleClick}
    >
      <AtTabsPane current={current} index={0}>
        <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
      </AtTabsPane>
      <AtTabsPane current={current} index={1}>
        <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
      </AtTabsPane>
      <AtTabsPane current={current} index={2}>
        <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
      </AtTabsPane>
      <AtTabsPane current={current} index={3}>
        <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
      </AtTabsPane>
      <AtTabsPane current={current} index={4}>
        <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
      </AtTabsPane>
      <AtTabsPane current={current} index={5}>
        <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
      </AtTabsPane>
    </AtTabs>
  )
}
