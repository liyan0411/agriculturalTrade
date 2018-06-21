// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {
        iconUrl: '/images/user/icon1.png',
        text: '店铺资料',
        url: '/pages/user/storeInfo/storeInfo'
      },
      {
        iconUrl: '/images/user/icon2.png',
        text: '商品管理',
        url: '/pages/user/myCommodity/myCommodity'
      },
      {
        iconUrl: '/images/user/icon3.png',
        text: '查看合同',
        url: '/pages/user/contract/contract'
      },
      {
        iconUrl: '/images/user/icon4.png',
        text: '查看店铺',
        url: '/pages/user/scanCodeInfo/scanCodeInfo'
      },
      {
        iconUrl: '/images/user/icon5.png',
        text: '市场消息',
        url: '/pages/user/marketInfo/marketInfo'
      }
    ]
  },
  openPage(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
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