import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 存储需要的状态
    userInfo: {}
  },
  mutations: {
    // mutations是修改state中的状态的唯一方法
    getUserInfo(state, user) {
      this.state.userInfo = user;

    }
  },
  actions: {
    // 为了避免异步条件造成的问题，通常通过提交actions中方法去提交mutations
    getUserInfo({commit}, user) {
      commit("getUserInfo", user);
    }
  }
});

export default store;
