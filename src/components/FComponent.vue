<template>
  <div class="hello">
    <h1>{{ msg }}{{counter}}</h1>
    <button @click="emitChildFunc">调用子组件函数</button>
    <hr>
    <c-component :msg="content" @emitHandle="emitHandle" :f-bus="bus"></c-component>
    <hr>
    <ct-component :msg="content" @emitHandle="emitHandle" :f-bus="bus"></ct-component>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CComponent from "./CComponent.vue";
  import CtComponent from "./CtComponent.vue";
  export default {
    components : {
      CComponent,
      CtComponent
    },
    name: 'HelloWorld',
    data () {
      return {
        msg: '组件通信demo',
        content : '来自父级的讯息',
        counter : 0,
        bus : new Vue()
      }
    },
    mounted () {
      for (let i = 0, len = this.$children.length; i < len; i++) {
        console.log(this.$children[0].cName);
      }
    },
    methods : {
      emitHandle : function (content) {
        console.log(content);
        this.counter++;
      },
      emitChildFunc : function () {
        for (let i = 0, len = this.$children.length; i < len; i++) {
          this.$children[i].onFatherHandle()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
