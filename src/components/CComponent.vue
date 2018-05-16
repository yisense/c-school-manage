<template>
  <div>
    <p>{{msg}}{{counter}}</p>
    <button @click="handleClick">通知父级</button>
    <button @click="handleFatherFunc">调用父级函数</button>
    <button @click="handleEmitBrother">通知兄弟组件</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    props : {
      msg : {
        type : String,
        required : true
      },
      fBus : {
        type : Object
      }
    },
    components: {},
    data() {
      return {
        cName : '呵呵哒',
        counter : 0
      }
    },
    created () {
      console.log(this.msg);
    },
    methods: {
      handleClick  : function () {
        this.$emit('emitHandle','呵呵');
      },
      handleFatherFunc : function () {
        this.$parent.emitHandle('调用父级函数')
      },
      handleEmitBrother : function () {
        if (!this.fBus) {
          return;
        }
        console.log('通知了')
        this.fBus.$emit('brother','熊泰迪');
      },
      onFatherHandle () {
        this.counter++;
      }
    }
  }
</script>
