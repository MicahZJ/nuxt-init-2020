// import webConfig from '../utils/webConfig'

export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  // const api = $axios.create({
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // })
  //
  // // Set baseURL to something different
  // api.setBaseURL(webConfig.rootUrl)
  //
  // // Inject to context as $api
  // inject('api', api)

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
  // 请求前
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  // response interceptor
  // $axios.interceptors.response.use(
  //   /**
  //    * Determine the request status by custom code
  //    * Here is just an example
  //    * You can also judge the status by HTTP Status Code
  //    */
  //   (response) => {
  //     const res = response.data
  //     if (res.code === 20000) {
  //       return res
  //     } else {
  //       redirect('/404')
  //       // if the custom code is not 200, it is judged as an error.
  //     }
  //     return Promise.reject(new Error(res.msg || 'Error'))
  //   },
  //   (error) => {
  //     console.log('err' + error) // for debug
  //
  //     return Promise.reject(error)
  //   }
  // )

  $axios.interceptors.response.use((response) => {
    if (response.data.success === false) {
      console.log('请求失败')
      return
    }
    console.log(response)
    return response
  }, (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400: err.message = '请求错误(400)'; break
        case 401: return history.push('/login')
        case 403: err.message = '拒绝访问(403)'; break
        case 404: err.message = '请求出错(404)'; break
        case 408: err.message = '请求超时(408)'; break
        case 500: err.message = '服务器错误(500)'; break
        case 501: err.message = '服务未实现(501)'; break
        case 502: err.message = '网络错误(502)'; break
        case 503: err.message = '服务不可用(503)'; break
        case 504: err.message = '网络超时(504)'; break
        case 505: err.message = 'HTTP版本不受支持(505)'; break
        default: err.message = `连接出错(${err.response.status})!`
      }
    } else {
      err.message = '连接服务器失败!'
    }
    // message.error(err.message)
    return Promise.reject(err)
  })

  $axios.onError((e) => {
    const code = parseInt(e.response && e.response.status)
    console.log('bug', code)
    switch (code) {
      case 400:
        redirect('/error')
        // error({ statusCode: 400, message: 'not found' })
        break
      case 600:
        redirect({
          path: '/error'
        })
        // error({ statusCode: 600, message: '用户未验证' })
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
