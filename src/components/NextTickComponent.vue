<template>
  <div>
    {{msg}}
  </div>
  <button>变化</button>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    components: {},
    data() {
      return {
        msg : '1'
      }
    },
    methods: {
      clickFunc : function () {
        this.msg = '122 '
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
