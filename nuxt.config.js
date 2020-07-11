import fa from "element-ui/src/locale/lang/fa";

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/axios', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: 'https://www.powereco.cn',
    prefix: '/api', // 给url加一个前缀'/api'
    credentials: true, // 跨域请求是否使用凭证
    proxy: true // 开启代理
  },
  proxy: {
    // '/rootUrl/': { target: 'https://www.powereco.cn', pathRewrite: { '^/api/': '' } }
    '/api': {
      target: 'https://www.powereco.cn/api',
      pathRewrite: {
        '^/api': '/', // 将 /api 替换掉
        changeOrigin: true // 是否跨域
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/],
    postcss: { // 配置vw布局
      plugins: [
        require('postcss-px-to-viewport')({
          unitToConvert: 'px', // 需要转换的单位，默认为"px"
          viewportWidth: 1920, // 视窗的宽度，对应pc设计稿的宽度，一般是1920
          // viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度
          unitPrecision: 3, // 单位转换后保留的精度
          propList: [ // 能转化为vw的属性列表
            '*'
          ],
          viewportUnit: 'vw', // 希望使用的视口单位
          fontViewportUnit: 'vw', // 字体使用的视口单位
          selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: false, // 媒体查询里的单位是否需要转换单位
          replace: true, // 是否直接更换属性值，而不添加备用属性
          exclude: /(\/|\\)(node_modules)(\/|\\)/ // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        })
      ]
    }
  },
  vendor: ['axios', 'element-ui'] // 防止重复打包
}
