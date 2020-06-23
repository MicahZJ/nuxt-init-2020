import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const state = () => ({
  barIndex: '1'
})

export const getters = {
  barIndex: state => state.barIndex
}

export const mutations = {
  CHANGE_INDEX (state, value) {
    state.barIndex = value
    window.sessionStorage.setItem('barIndex', value)
  }
}

export const strict = debug

export const plugins = debug ? [createLogger()] : []

// Classic(不建议使用)： store/index.js返回创建Vuex.Store实例的方法。
// const store = new Vuex.Store({
//   state: {
//     barIndex: '1'
//   },
//   getters: {
//     barIndex: state => state.barIndex
//   },
//   mutations: {
//     CHANGE_INDEX (state, value) {
//       state.barIndex = value
//       window.sessionStorage.setItem('barIndex', value)
//     }
//   },
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
// })
// export default () => store
