var detail = '../detail/detail'
Page({
 data: {
  list: [],
  maxtime: '',
  loadingHidden: false
 },
 onLoad: function (options) {
  // 页面初始化 options为页面跳转所带来的参数
  this.requestData('newlist');
 
 },
 /**
  * 滚动到底部时加载下一页
  */
 bindscrolltolower: function () {
  console.log('到底部')
  this.requestData('list');
 
 },
 
 /**
  * 加载数据
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
  var that = this;
  wx.request({
    url: 'https://route.showapi.com/255-1',
    data: {
        showapi_appid:'35111',
        showapi_test_draft:false,
        showapi_timestamp:showapi_timestamp,
        pointId:'559425916e36d447e02d19a2',
        pointCode:'1',
        title:'',
        type:'10',
        showapi_sign:'5af5581b74a5439ba96c0d3cdda4daec'
   },
   method: 'GET',
   success: function (res) {
    console.log(res)
    console.log('上一页', that.datalist)
    that.setData({
     // 拼接数组
     list: that.data.list.concat(res.data.showapi_res_body.pagebean.contentlist),
     loadingHidden: true
    })
 
   }
  })
 },
 /**
  * 查看大图
  */
 lookBigPicture: function (e) {
  console.log(e);
  console.log(e.currentTarget.id)
  //图片url 对应wxml中data-url="{{item.url}}"
  var url = e.currentTarget.dataset.url;
  url = url.replace('http','https');
  console.log(url);
  //获取图片高度 对应wxml中data-height="{{item.height}}"
  var height = e.currentTarget.dataset.height;
  //获取图片高度 对应wxml中data-width="{{item.width}}"
  var width = e.currentTarget.dataset.width;
  // 传参方式向GET请求
  wx.navigateTo({
   url: detail + '?' + 'url=' + url,
   success: function (res) {
    console.log(res)
   },
   fail: function (err) {
    console.log(err)
   },
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