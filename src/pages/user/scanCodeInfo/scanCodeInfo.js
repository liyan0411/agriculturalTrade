// pages/user/scanCodeInfo/scanCodeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content1: true,
    content2: false,
    commodityList: [
      {
        text: '小白菜',
        status: 0,
        cd: '河北',
        date: '06/14'
      },
      {
        text: '小白菜',
        status: 0,
        cd: '河北',
        date: '06/14'
      }, {
        text: '小白菜',
        status: 1,
        cd: '河北',
        date: '06/14'
      }
    ]
  },
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: '1340000'
    })
  },
  toggle(e) {
    let type = e.currentTarget.dataset.type
    if (type == 0) {
      this.setData({
        content1: true,
        content2: false        
      })
    }
    if (type == 1) {
      this.setData({
        content1: false,
        content2: true
      })
    }
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