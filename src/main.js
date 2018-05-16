// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import store from './store/index';
import axios from './libs/axios';
import httpClient from './libs/httpClient';
import 'iview/dist/styles/iview.css';
import '../src/assets/scss/common.scss';

Vue.use(axios);
Vue.use(httpClient);
Vue.use(iview);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
