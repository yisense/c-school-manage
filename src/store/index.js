import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    headerHeight : document.getElementsByTagName('body')[0].offsetHeight
  },
  getters : {
    headerHeight : state => {
      // console.log(document.getElementsByTagName('body')[0].offsetHeight);
      let height = document.getElementsByTagName('body')[0].offsetHeight - 60;
      return height;
    }
  },
  mutations : {

  }
});

export default store;
