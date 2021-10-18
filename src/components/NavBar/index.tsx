import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'

// hooks
import useNavInfo from "../../hooks/useNavInfo"

import { AtSearchBar } from 'taro-ui'
import "./index.scss"

export default function NavBar() {

  const { statusBarHeight } = useNavInfo()
  const [keyWords, setKeyWords] = useState()

  const searchChange = () => {
    console.log('search')
  }

  return (
    <View style={{ marginTop: statusBarHeight, width: '72%' }}>
      <AtSearchBar
        value={keyWords}
        onChange={searchChange}
      />
    </View>
  )
}