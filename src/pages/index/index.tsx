/* eslint-disable react/jsx-indent-props */
import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import Taro from "@tarojs/taro"

// components
import NavBar from '../../components/NavBar/index'
// apis
import { loginAction } from "../../services/auth"

// pages
import HomePage from "../home"


import './index.scss'

export default class Index extends Component {

    state = {
        current: 0,
        tabList: [
            { title: '首页', iconType: 'home' },
            { title: '拍照', iconType: 'camera' },
            { title: '我的', iconType: 'shopping-bag-2' }
        ]
    }

    onLoad = async () => {
        const res = await loginAction()
        console.log(res)
    }

    // 底部导航点击
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
                    fontSize={11}
                    fixed
                    tabList={tabList}
                    current={current}
                    onClick={this.handleClick}
                />
            </View >
        )
    }
}
