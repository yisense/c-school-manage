export const liveSearchVo = function () {
  return new Object({
    liveName: '',
    liveStartTime :'',
    liveEndTime : '',
    schoolId : '',
    pageNo: 1,
    pageSize: 10,
    total : 0,
    currentPage :1,
    bLoading : false
  });
}
