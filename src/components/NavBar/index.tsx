import React, { useState } from 'react'
import { View } from '@tarojs/components'

import { AtSearchBar } from "taro-ui"

// hooks
import useNavInfo from "../../hooks/useNavInfo"

import "./index.scss"

export default function NavBar() {
  
  const { statusBarHeight } = useNavInfo()

  const [keyWords, setKeyWords] = useState()

  const searchChange = () => {
    console.log('search')
  }

  return (
    <View style={{ paddingTop: statusBarHeight, width: '100%', backgroundColor: '#fbd62f!important' }}>
      <AtSearchBar
        className='global-search-bar'
        value={keyWords}
        onChange={searchChange}
      />
    </View>
  )
}