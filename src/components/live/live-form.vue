<template>
  <div>
    <Form ref="liveForm" :model="liveVo" :rules="ruleValidate" :label-width="80">
      <FormItem label="栏目名称" prop="columnName">
        <Input v-model="liveVo.columnName" placeholder="请输入栏目名称" @on-blur="nameValidateBlur()"></Input>
      </FormItem>
      <FormItem label="栏目简介" prop="description">
        <Input type="textarea" v-model="liveVo.description" placeholder="请输入栏目简介"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {SERVICE_URLS} from "../../libs/service.url";
  import util from '@/libs/my-util.js';
  import {liveVo} from "./vo/liveVo";

  export default {
    props: ['columnId','closeHandle','liveData'],
    components: {},
    data() {
      return {
        liveVo : new liveVo(),
        ruleValidate: {
          liveName: [
            { required: true, message: '直播名称不能为空！', trigger: 'blur' }
          ],
          liveStartTime: [
            { required: true, message: '请选择开始时间！', trigger: 'blur' }
          ],
          liveEndTime: [
            { required: true, message: '请选择结束时间！', trigger: 'blur' }
          ],
          livePushUrl: [
            { required: true, message: '推流地址不能不能为空！', trigger: 'blur' }
          ],
          livePullUrl: [
            { required: true, message: '拉流地址不能为空！', trigger: 'blur' }
          ],
          liveCoverUrl: [
            { required: true, message: '封面地址不能为空！', trigger: 'blur' }
          ],
          liveLogo: [
            { required: true, message: '直播名称不能为空！', trigger: 'blur' }
          ],
          liveQRcode: [
            { required: true, message: '直播名称不能为空！', trigger: 'blur' }
          ],
          liveQRDescription: [
            { required: true, message: '直播名称不能为空！', trigger: 'blur' }
          ],
          liveBottomName: [
            { required: true, message: '直播名称不能为空！', trigger: 'blur' }
          ],
          liveBottomAdress: [
            { required: true, message: '直播名称不能为空！', trigger: 'blur' }
          ]
        },
        bNameValidate : false,
        nameValidateInfo : '',
        bIsAdd : false
      }
    },
    created(){
      if (this.liveData) {
        this.bIsAdd = false;
        this.liveVo = util.assignObj(this.liveVo,this.liveData);
      } else {
        this.bIsAdd = true;
      }
    },
    computed:{
      currentUser () {
        return this.$store.getters.currentUser
      }
    },
    methods: {
      handleSubmit () {
        this.$refs['liveForm'].validate((valid) => {
          if (valid) {
            let self = this;
            this.nameValidate().then((data) => {
              if (!data) {
                let url;
                if (self.bIsAdd) {
                  url = SERVICE_URLS.systemManage.column.add;
                } else {
                  url = SERVICE_URLS.systemManage.column.update;
                }
                Vue.submit(self, {
                  loading: 'loading',
                  url: url,
                  data: self.liveVo,
                  callback: (_data) => {
                    self.$Message.success('操作成功!');
                    if (self.closeHandle) {
                      self.closeHandle();
                    }
                  }
                })
              }
            }).catch((reason) => {

            });
          } else {

          }
        });
      },
      handleReset () {
        this.$refs['liveForm'].resetFields();
      },
      closeModal () {
        this.handleReset();
      },
      viewColumnById (id) {
        let self = this;
        Vue.submit(self,{
          url:SERVICE_URLS.systemManage.column.search,
          params:{
            id:id
          },
          callback:(data)=>{
            Object.assign(self.liveVo,data);
          }
        });
      },
      nameValidate () {
        let self = this;
        return new Promise(function (resolve,reject) {
          Vue.submit(self, {
            loading: 'loading',
            url: SERVICE_URLS.systemManage.column.checkName,
            params: {
              columnName : self.liveVo.columnName,
              id : self.liveVo.id || ''
            },
            callback: (_data) => {
              resolve(false);
            },
            error: (_data) => {
              if (_data && _data.flag == 1000) {
                reject(true);
              }
            }
          })
        });
      },
      nameValidateBlur () {
        if (!this.liveVo.columnName) {
          return;
        }
        let self = this;
        Vue.submit(self, {
          loading: 'loading',
          url: SERVICE_URLS.systemManage.column.checkName,
          params: {
            columnName : self.liveVo.columnName,
            id : self.liveVo.id || ''
          },
          callback: (_data) => {

          },
          error: (_data) => {
            if (_data) {
              self.$Message.error('栏目名称已存在！');
            }
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
