// pages/form/form.js
Page({

  data: {
    left: 200
  },
  getLength(e){
    const length = e.detail.value.length
    this.setData({
      left: 200 - length
    })
  }
})