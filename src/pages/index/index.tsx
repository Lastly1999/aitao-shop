import React from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Taro from "@tarojs/taro"

// components
import NavBar from '../../components/NavBar/index'
import GridMenu from "./components/GridMenu"
import Tabs from "./components/Tabs"

// apis
import { loginAction } from "../../services/auth"



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
                <GridMenu />
                <Tabs />
            </View >
        )
    }
}
