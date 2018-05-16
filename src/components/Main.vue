<template>
  <div class="of-h">
    <c-header></c-header>
    <div class="a-side">
      <div class="nav-wrapper">
        <ul class="nav hm-scroll" id="main-menu" :style="{'max-height':customHeight+'px'}">
          <li class="menu-item clearfix">
            <a href="javascript:;">
              <i class="icon iconfont icon-live_icon"></i>
              <span class="item-title">
                系统设置
              </span>
            </a>
            <ul class="expandable-level1">
              <li>
                <router-link to="fc" active-class>
                  菜单管理
                </router-link>
              </li>
              <li>
                <router-link to="test" active-class>
                  测试管理
                </router-link>
              </li>
              <li>
                <router-link to="live" active-class>
                  直播管理
                </router-link>
              </li>
            </ul>
          </li>
          <li class="menu-item clearfix">
            <a href="javascript:;">
              <i class="icon iconfont icon-live_icon"></i>
              <span class="item-title">
                系统设置
              </span>
            </a>
            <ul class="expandable-level1">
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
            </ul>
          </li>
          <li class="menu-item clearfix">
            <a href="javascript:;">
              <i class="icon iconfont icon-live_icon"></i>
              <span class="item-title">
                系统设置
              </span>
            </a>
            <ul class="expandable-level1">
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
            </ul>
          </li>
          <li class="menu-item clearfix">
            <a href="javascript:;">
              <i class="icon iconfont icon-live_icon"></i>
              <span class="item-title">
                系统设置
              </span>
            </a>
            <ul class="expandable-level1">
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
            </ul>
          </li>
          <li class="menu-item clearfix">
            <a href="javascript:;">
              <i class="icon iconfont icon-live_icon"></i>
              <span class="item-title">
                系统设置
              </span>
            </a>
            <ul class="expandable-level1">
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
            </ul>
          </li>
          <li class="menu-item clearfix">
            <a href="javascript:;">
              <i class="icon iconfont icon-live_icon"></i>
              <span class="item-title">
                系统设置
              </span>
            </a>
            <ul class="expandable-level1">
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
              <li>
                <a href="javascript:;">菜单管理</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import CHeader from './common/Header.vue'

  export default {
    components: {
      CHeader
    },
    data() {
      return {
        openNames : ['1-1','1-2','1-3','2-1','2-2','2-3'],
        customHeight : 0,
        activeMenuName : ''
      }
    },
    computed : {
      headerHeight(){
        console.log(this.$store.getters.headerHeight);
        return this.$store.getters.headerHeight;
      }
    },
    updated : {
      headerHeight(){
        return this.$store.getters.headerHeight;
      }
    },
    created () {
      this.activeMenuName = this.$route.name;
    },
    mounted () {
      const that = this;
      that.customHeight = $(window).height();
      window.onresize = () => {
        return (() => {
          that.customHeight = $(window).height();
        })();
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">

</style>
