import React, { useState } from 'react'
import { AtTabBar } from 'taro-ui'

export default function CustomTabBar() {

  const [current, setCurrent] = useState()

  const tabList = [
    { title: '首页', iconType: 'home' },
    { title: '外卖', iconType: 'shopping-bag-2' },
    { title: '我的', iconType: 'user' }
  ]

  // 底部导航点击
  const handleClick = (index) => {
    this.setState({
      current: index
    })
    if (index === 1) {
      Taro.redirectTo({
        url: `/pages/index/index`
      })
    }
    if (index === 2) {
      Taro.redirectTo({
        url: `/pages/user/index`
      })
    }
  }

  return (
    <div>
      <AtTabBar
        fontSize={11}
        fixed
        tabList={tabList}
        current={current}
        onClick={handleClick}
      />
    </div>
  )
}
