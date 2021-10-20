import Taro from "@tarojs/taro"

// 授权登录
export const loginAction = () => {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: (res) => {
        Taro.request({
          url: `http://localhost:3690/v1/auth/login `,
          method: 'POST',
          data: {
            jsCode: res.code
          },
          success: (result: Taro.request.SuccessCallbackResult<any>) => {
            console.log(result)
            resolve(result)
          }
        })
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}