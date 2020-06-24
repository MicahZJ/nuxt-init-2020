let rootUrl
let deviceUrl
if (process.env.NODE_ENV === 'production') {
  /// 正式环境api接口地址
  rootUrl = 'https:///api'
} else {
  // 测试'
  rootUrl = 'https://www.powereco.cn/api'
}

const webConfig = {
  version: '1.0.0',
  rootUrl,
  deviceUrl
}

export default webConfig
