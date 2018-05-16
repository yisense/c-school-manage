<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  computed : {
    headerHeight(){
      console.log(this.$store.getters.headerHeight);
      return this.$store.getters.headerHeight;
    }
  },
  mounted () {
    window.onresize = this.autoHeight;
  },
  methods: {
    autoHeight () {
      console.log($(window).height());
      return $(window).height();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
