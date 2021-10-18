import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default class Home extends Component {
  state = {
    keywords: ''
  }

  searchChange = (val) => {
    console.log(val)
  }

  render() {
    const { keywords } = this.state
    return (
      <View className='home'>
        
      </View >
    )
  }
}
