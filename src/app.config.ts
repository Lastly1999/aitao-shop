export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/home/index',
  ],
  tabBar: {
    custom: true,
    color: '#999',
    selectedColor: '#B90220',
    backgroundColor: "#000",
    list: [{
      pagePath: "pages/index/index",
      text: "首页"
    }, {
      pagePath: "pages/home/index",
      text: "外卖"
    }, {
      pagePath: "pages/user/index",
      text: "我的"
    }
    ],
    usingComponents: {
      customtabbar: "custom-tab-bar/index"
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  }
}
