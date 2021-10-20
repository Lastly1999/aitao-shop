import React from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Taro from "@tarojs/taro"

// components
import NavBar from '../../components/NavBar/index'
// apis
import { loginAction } from "../../services/auth"

// pages
import HomePage from "../home"


import './index.scss'

export default class Index extends React.Component {

    state = {
        current: 0
    }

    onLoad = async () => {
        const res = await loginAction()
        console.log(res)
    }


    render() {
        return (
            <View className='index'>
                <NavBar />
                {/* <Swiper
                  style={{ height: '100%' }}
                  current={current}
                  easing-function='easeInOutCubic'
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  circular
                  skip-hidden-item-layout
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
                </Swiper> */}
            </View >
        )
    }
}
