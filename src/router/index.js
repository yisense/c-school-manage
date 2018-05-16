import Vue from 'vue'
import Router from 'vue-router'
const fComponent = () => import('@/components/FComponent.vue');
const Test = () => import('@/components/Test.vue');
const Index = () => import('@/components/live/Index.vue');
const Main = () => import('@/components/Main.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: 'index'
    },
    {
      path : '/fc',
      name: 'fc',
      component: fComponent
    },
    {
      path : '/index',
      name : 'index',
      component : Main,
      children: [
        {
          path: '',
          redirect: 'fc'
        },
        {
          path: 'fc',
          title: '首页',
          name: 'fc',
          component: fComponent
        },
        {
          path: 'test',
          title: '首页',
          name: 'test',
          component: Test
        },
        {
          path: 'live',
          title: '直播列表',
          name: 'live',
          component: Index
        }
      ]
    }
  ]
})
