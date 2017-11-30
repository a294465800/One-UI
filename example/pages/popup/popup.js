// pages/popup/popup.js
Page({

  data: {
    showBottom: false,
    showTop: false,
    showMiddle: false,
  },

  toggleBottom() {
    this.setData({
      showBottom: !this.data.showBottom
    })
  },

  toggleMiddle() {
    this.setData({
      showMiddle: !this.data.showMiddle
    })
  },

  toggleTop() {
    this.setData({
      showTop: !this.data.showTop
    })
  }

})