Page({
 data: {
  list: [],
  maxtime: '',
  loadingHidden: false
 },
 onLoad: function (options) {
  // 页面初始化 options为页面跳转所带来的参数
  //加载最新
  this.requestData('newlist');
 },
 
 /**
  * 上拉刷新
  */
 bindscrolltoupper: function () {
  //加载最新
  // this.requestData('newlist');
 },
 
 /**
  * 加载更多
  */
 bindscrolltolower: function () {
  console.log('到底部')
  //加载更多
  this.requestData('list');
 },
 
 /**
  * 请求数据
  */

 requestData: function (a) {
  var that = this;
  var date =new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  var showapi_timestamp=year+'0'+month+'0'+day+''+hour+''+minute+''+second
  console.log(showapi_timestamp)
  console.log(that.data.maxtime)
  wx.request({
   url: 'https://route.showapi.com/255-1',
   data: {
    showapi_appid:'35111',
    showapi_test_draft:false,
    showapi_timestamp:showapi_timestamp,
    pointId:'559425916e36d447e02d19a2',
    pointCode:'1',
    title:'',
    type:'29',
    showapi_sign:'5af5581b74a5439ba96c0d3cdda4daec'
   },
   method: 'get',
   success: function (res) {
    console.log(res)
    console.log('上一页', that.data.list)
    that.setData({
     // 拼接数组
     list: that.data.list.concat(res.data.showapi_res_body.pagebean.contentlist),
     loadingHidden: true,
 //    maxtime: res.data.info.maxtime
    })
 
   }
  })
 },
 onReady: function () {
  // 页面渲染完成
 },
 onShow: function () {
  // 页面显示
 },
 onHide: function () {
  // 页面隐藏
 },
 onUnload: function () {
  // 页面关闭
 }
})