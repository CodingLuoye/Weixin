//index.js
//获取应用实例

var app = getApp()
var flag = true
Page({
  data: {
    color : 'window',
    motto: 'Hello World',
    userInfo: {}
  },
  click:function(){
    console.log("点击了文字");
    if(flag){
        color = 'window-red';
        flag = false;
    }else{
        color = 'window';
        flag = true;
    }
     this.setData({
        color
      });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
 onReady:function(){
   console.log("onReady");
    // 页面渲染完成
  },
  onShow:function(){
     console.log("onShow");
    // 页面显示
  },
  onHide:function(){
     console.log("onHide");
    // 页面隐藏
  },
  onUnload:function(){
     console.log("onUnload");
    // 页面关闭
  }

})
