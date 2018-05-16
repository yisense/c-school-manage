<template>
  <div>
    <p>{{msg}}{{counter}}</p>
    <button @click="handleClick">通知父级</button>
    <button @click="handleFatherFunc">调用父级函数</button>
    <p v-if="status">来自兄弟组件</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    props : {
      msg : {
        type : String,
        required : false
      },
      fBus : {
        type : Object
      }
    },
    components: {},
    data() {
      return {
        cName : '呵呵哒',
        counter : 0,
        status : false
      }
    },
    created () {
      console.log(this.msg);
    },
    mounted () {
      if (!this.fBus) {
        return;
      }
      this.fBus.$on('brother',this.onBrotherHandle);
    },
    methods: {
      handleClick  : function () {
        this.$emit('emitHandle','呵呵');
      },
      handleFatherFunc : function () {
        this.$parent.emitHandle('调用父级函数')
      },
      onFatherHandle :function () {
        this.counter += 2;
      },
      onBrotherHandle : function () {
        this.status = !this.status;
      }
    }
  }
</script>
