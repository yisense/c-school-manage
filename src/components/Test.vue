<template>
  <Row>
    <Table :columns="columns1" :data="data8"></Table>
  </Row>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    components: {},
    data() {
      return {
        columns1: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data8: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            cellClassName: {
              age: 'demo-table-info-cell-age',
              address: 'demo-table-info-cell-address'
            }
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            cellClassName: {
              name: 'demo-table-info-cell-name'
            }
          }
        ]
      }
    },
    methods: {
      initSearchVo () {
        this.columnSearchVo.columnName = '';
        this.columnSearchVo.pageSize = 10;
        this.columnSearchVo.pageNo = 1;
        this.columnSearchVo.total = 0;
        this.columnSearchVo.currentPage = 1;
      },
      pageNoChange (num) {
        this.columnSearchVo.pageNo = num;
        this.fetchColumnData();
      },
      fetchColumnData () {
        let self = this;
        Vue.submit(self,{
          url:SERVICE_URLS.systemManage.column.pagination,
          params:self.columnSearchVo,
          callback:(_data)=>{
            self.tableData=_data.data;
            self.columnSearchVo.total=_data.allCount;
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
