<template>
  <div class="live-container">
    <Row class="search-area">
      <Col :span="24">
        <Input v-model.trim="searchVo.liveName" :clearable="true" placeholder="关键字搜索" class="search-input"></Input>
        <Button type="info" icon="ios-search"  @click="searchByKeyWords()">搜索</Button>
        <Button type="success" icon="plus" @click="addLiveModal = true;liveModel = null;">新增直播</Button>
      </Col>
    </Row>
    <Row>
      <Table border :columns="columns1" :data="liveData"></Table>
    </Row>
    <Modal
      title="新增/编辑栏目"
      class="add-column"
      v-model="addLiveModal"
      :mask-closable="false"
      :closable="false"
      :styles="{top: '20px'}">
      <live-form ref="liveRef" :column-data="liveModel" :close-handle="updateHandle" v-if="addLiveModal"></live-form>
      <div slot="footer" class="bottom-btn">
        <Button type="primary" @click="handleLiveSubmit()">确定提交</Button>
        <Button type="ghost" @click="closeModal()" style="margin-left: 8px">关闭(X)</Button>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import LiveForm from './live-form.vue';
  import {liveSearchVo} from "./vo/liveSearchVo";
  import {SERVICE_URLS} from "../../libs/service.url";

  export default {
    components: {
      LiveForm
    },
    data() {
      return {
        searchVo : new liveSearchVo(),
        liveData : [],
        addLiveModal : false,
        liveModel : null,
        columns1: [
          {
            title: '直播名称',
            key: 'liveName'
          },
          {
            title: '开始时间',
            key: 'liveStartTime'
          },
          {
            title: '结束时间',
            key: 'liveEndTime'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'ghost',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.openEditLiveModal(params.row);
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'ghost',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.openEditLiveModal(params.row);
                    }
                  }
                }, '推荐到首页'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.openEditLiveModal(params.row.id,params.row.columnName);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ]
      }
    },
    created() {
      this.fetchLiveData();
    },
    methods: {
      initSearchVo () {
        this.searchVo.liveName = '';
        this.searchVo.pageSize = 10;
        this.searchVo.pageNo = 1;
        this.searchVo.total = 0;
        this.searchVo.currentPage = 1;
      },
      pageNoChange (num) {
        this.searchVo.pageNo = num;
        this.fetchLiveData();
      },
      fetchLiveData () {
        let self = this;
        Vue.submit(self,{
          url:SERVICE_URLS.live.page,
          params:self.searchVo,
          callback:(_data)=>{
            self.liveData = _data.data;
            console.log(self.liveData);
          }
        })
      },
      searchByKeyWords () {
        this.searchVo.pageSize = 10;
        this.searchVo.pageNo = 1;
        this.searchVo.total = 0;
        this.searchVo.currentPage = 1;
        this.fetchLiveData();
      },
      openEditLiveModal (data) {
        this.liveModel = data;
        this.addLiveModal = true;
      },
      updateHandle () {
        this.closeModal();
        this.fetchLiveData();
      },
      handleLiveSubmit(){
        this.$refs.liveRef.handleSubmit();
      },
      handleReset () {
        this.$refs.liveRef.handleReset();
      },
      closeModal () {
        this.handleReset();
        this.addLiveModal = false;
        this.liveModel = null;
      },
    }
  }
</script>

<style scoped lang="scss">
  .search-input {
    width: 200px;
  }
</style>
