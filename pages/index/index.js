//index.js
//获取应用实例
const app = getApp()
var calc=require("../../utils/calc")
Page({
  data: {
    calc:{},
    tapped:{}
  },
  //事件处理函数
  showAbout: function(e) {
    wx.showModal({
      title: '关于',
      content: '简易计算器 By Samwell',
      showCancel:true
    })
  },
   btnClicked: function (e) {
    var code = e.target.dataset.op
    calc.addOp(code)
    console.log(calc.getVars())
    this.setData({ calc: calc.getVars() })
  },
  btnTouchStart: function (e) {
    var code = e.target.dataset.op
    var tapped = { [code]: 'active' }
    this.setData({ tapped: tapped })
  },
  btnTouchEnd: function (e) {
    var code = e.target.dataset.op
    var tapped = {}
    this.setData({ tapped: tapped })
  },
  onLoad: function () {
    console.log('onLoad')
    calc.reset()
    var that = this
  }
})
