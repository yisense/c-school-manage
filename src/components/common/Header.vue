<template>
  <Row class="c-header">
    <Col span="12">
      <div class="logo">
        <img src="../../assets/image/logo.png" alt="">
      </div>
    </Col>
    <Col span="12">
      <Row class="right-nav">
        <Col span="24">

          <Dropdown transfer trigger="click">
            <a href="javascript:void(0)">
              易俊涛
              <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="loginout" divided>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue'

    export default {
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

</style>
