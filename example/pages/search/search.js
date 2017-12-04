// pages/search/search.js
Page({

  data: {
    search: {
      value: '',
      placeholder: '搜索',
      expand: false,
      history: true,
      histroyData: ['面包', '奶油', '鸡蛋', '香蕉', '苹果', '西红柿', '冰激凌', '肯德基', '功夫王（市桥分店）'],
      hot: true,
      hotData: ['麦当劳', '甜甜心炸鸡店', '寿司', '青瓜', '吃货王', '炸鸡啤酒']
    }
  },

  _handleOneSearchInput(e) {
    const value = e.detail.value
    this.setData({
      'search.value': value
    })
  },

  _handleOneSearchCancel(e) {
    this.setData({
      'search.value': ''
    })
  },

  _handleOneSearchExpand(e) {
    this.setData({
      'search.expand': !this.data.search.expand
    })
  },

  _handleOneSearchTipBtn(e) {
    const value = e.target.dataset.value
    if (value) {
      this.setData({
        'search.value': value
      })
    }
  },

  _handleOneSearchConfirm() {
    console.log(this.data.search.value)
  }
})