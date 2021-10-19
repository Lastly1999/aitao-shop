import { Component } from 'react'
import { View } from '@tarojs/components'

import Taro from "@tarojs/taro"

// components
import GridMenu from "./components/GridMenu"

import './index.scss'

export default class Home extends Component {

  state = {
    keywords: ''
  }

  // 对应 onLaunch
  onLaunch = () => {
    
  }

  searchChange = (val) => {
    console.log(val)
  }

  render() {
    const { keywords } = this.state
    return (
      <View className='home'>
        <GridMenu />
      </View >
    )
  }
}
