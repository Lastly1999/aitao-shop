import React from 'react'
import { View } from '@tarojs/components'

// components
import GridMenu from "./components/GridMenu"
import Tabs from "./components/Tabs"

import './index.scss'

export default class Home extends React.Component {

  state = {
    keywords: ''
  }

  searchChange = val => {
    console.log(val)
  }

  render() {
    return (
      <View className='home'>
        <GridMenu />
        <Tabs />
      </View >
    )
  }
}
