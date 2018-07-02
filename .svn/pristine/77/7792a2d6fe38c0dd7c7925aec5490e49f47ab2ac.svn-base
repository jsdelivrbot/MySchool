import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let state = {
  isShow:false
}



let getters = {
  isShowMethod(state){
    return state.isShow;
  }
}


let actions = {
  showSideBar({commit}){
    commit('showBar')
  },
  hideSideBar({commit}){
    commit('hideBar')
  }
}


let mutations = {
  showBar(state){
    state.isShow=true;
  },
  hideBar(state){
    state.isShow=false;
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});


