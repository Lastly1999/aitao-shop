import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

// components
import NavBar from '../../components/NavBar/index'

// pages
import HomePage from "../home"


import './index.scss'

export default class Index extends Component {
  state = {
    current: 0,
    tabList: [
      { title: '首页', iconType: 'home' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'shopping-bag-2' }
    ]
  }
  handleClick = (index) => {
    this.setState({
      current: index
    })
  }
  render() {
    const { current, tabList } = this.state
    return (
      <View className='index'>
        <NavBar />
        <Swiper
          current={current}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
        >
          <SwiperItem>
            <HomePage />
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
        <AtTabBar
          fixed
          tabList={tabList}
          current={current}
          onClick={this.handleClick}
        />
      </View >
    )
  }
}
