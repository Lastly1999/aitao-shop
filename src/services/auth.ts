import Taro from "@tarojs/taro"

// 授权登录
export const loginAction = () => {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: (res) => {
        Taro.request({
          url: `http://localhost:3000/v1/auth/login `,
          method: 'POST',
          data: {
            jsCode: res.code
          }
        }).then(res => {
          console.log(res)
        })
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}