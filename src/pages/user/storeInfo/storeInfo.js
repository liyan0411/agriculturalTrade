// pages/user/storeInfo/storeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area: ['蔬菜区','熟食','肉类','鸡蛋'],
    areaNum: ['A','B','C','D'],
    areaIndex: 0,
    areaNumIndex: 0
  },
  // 区域选择
  areaChange: function (e) {
    this.setData({
      areaIndex: e.detail.value
    })
  },
  areaNumChange: function (e) {
    this.setData({
      areaNumIndex: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})