/*
vuex 核心管理对象
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
const state = {
 count: 0
}

// 包含多个更新state函数的对象
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// 包含多个对应事件函数的回调函数的对象
const actions = {
  // 增加的action
  increment ({commit}) {
    commit('INCREMENT')
  },
  // 减少的action
  decrement ({commit}) {
    commit('DECREMENT')
  },
  // 带条件的action
  incrementIfOdd ({commit}){
    if(state.count%2===1){
      commit('INCREMENT')
    }
  },
  // 异步的action
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

// 包含多个getter计属性的函数
const getters = {
  evenOrOdd(state){
    return state.count%2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件函数的回调函数的对象
  getters // 包含多个getter计属性的函数
})
