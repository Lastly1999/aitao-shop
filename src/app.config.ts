export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/shop/index',
  ],
  tabBar: {
    custom: false,
    color: '#000',
    selectedColor: '#e93b3d',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: "assets/tabBar/home.png",
      selectedIconPath: "assets/tabBar/home-checked.png"
    }, {
      pagePath: "pages/shop/index",
      text: "外卖",
      iconPath: "assets/tabBar/waimai.png",
      selectedIconPath: "assets/tabBar/waimai-checked.png"
    }, {
      pagePath: "pages/user/index",
      text: "我的",
      iconPath: "assets/tabBar/user.png",
      selectedIconPath: "assets/tabBar/user-checked.png"
    }
    ]
  }, 
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  }
}
