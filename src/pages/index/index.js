//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData:[
      {
        name:"大白菜",
        num:"500KG",
        time:"06.01 07:00",
        status:0
      },
      {
        name: "苹果",
        num: "400KG",
        time: "06.01 05:00",
        status: 1
      },
      {
        name: "茄子",
        num: "300KG",
        time: "06.01 07:20",
        status: 2
      },
      {
        name: "苹果",
        num: "400KG",
        time: "06.01 05:00",
        status: 1
      },
      {
        name: "香蕉",
        num: "250KG",
        time: "06.01 07:20",
        status: 1
      }
    ]
  },
  onLoad: function () {

  }
})
