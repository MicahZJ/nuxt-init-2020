// import webConfig from '../utils/webConfig'
import { Notification } from 'element-ui'

export default function ({ $axios, redirect, error }, inject) {
  // 设置超时时间
  $axios.defaults.timeout = 10000

  // request interceptor
  $axios.interceptors.request.use(
    (config) => {
      // do something before request is sent
      return config
    },
    (error) => {
      // do something with request error
      return Promise.reject(error)
    }
  )
  // 请求前，request拦截器，可以设置请求头，增加token
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
    // if (process.client) {
    //   // 客户端下，请求进度条开始
    //   NProgress.start()
    // }
    // // 将获取到token加入到请求头中
    // config.headers.common.Authorization = token
  })

  // 请求后，response拦截器，数据返回后，可以先在这里进行一个简单的判断
  $axios.interceptors.response.use((response) => {
    if (response.data.success === false) {
      console.log('请求失败')
      return
    }
    return response
  }, (err) => {
    // if (err && err.response) {
    //   switch (err.response.status) {
    //     case 400: err.message = '请求错误(400)'; break
    //     case 401: return history.push('/login')
    //     case 403: err.message = '拒绝访问(403)'; break
    //     case 404: err.message = '请求出错(404)'; break
    //     case 408: err.message = '请求超时(408)'; break
    //     case 500: err.message = '服务器错误(500)'; break
    //     case 501: err.message = '服务未实现(501)'; break
    //     case 502: err.message = '网络错误(502)'; break
    //     case 503: err.message = '服务不可用(503)'; break
    //     case 504: err.message = '网络超时(504)'; break
    //     case 505: err.message = 'HTTP版本不受支持(505)'; break
    //     default: err.message = `连接出错(${err.response.status})!`
    //   }
    // } else {
    //   err.message = '连接服务器失败!'
    // }
    // message.error(err.message)
    return Promise.reject(err)
  })

  $axios.onError((e) => {
    const code = parseInt(e.response && e.response.status)
    console.log('bug接口', e.config.url)
    switch (code) {
      case 400:
        redirect('/error')
        // error({ statusCode: 400, message: 'not found' })
        break
      case 600:
        Notification({
          message: code,
          position: 'bottom-right'
        })
        redirect({
          path: '/error'
        })
        break
      // case 401: return history.push('/login'); break;
      // case 403: err.message = '拒绝访问(403)'; break;
      // case 404: err.message = '请求出错(404)'; break;
      // case 408: err.message = '请求超时(408)'; break;
      // case 500: err.message = '服务器错误(500)'; break;
      // case 501: err.message = '服务未实现(501)'; break;
      // case 502: err.message = '网络错误(502)'; break;
      // case 503: err.message = '服务不可用(503)'; break;
      // case 504: err.message = '网络超时(504)'; break;
      // case 505: err.message = 'HTTP版本不受支持(505)'; break;
      // default: err.message = `连接出错(${err.response.status})!`;
    }
  })
}
