// pages/test/test.js
function oneRollNoticeObject(rollName) {
  const rollData = this.data[rollName]
  let start = rollData.start || 0
  const length = rollData.rollData.length
  const height = 20
  const duration = 1000


  const timer = setInterval(() => {
    if (this.data[rollName].disabled) {
      clearInterval(timer)
      return false
    }
    start -= height
    if (start <= -height * length) {
      this.setData({
        [`${rollName}.animation`]: `transform: translate3d(0,  ${start}px, 0);transition: all ${duration}ms;`
      })
      start = 0
      setTimeout(() => {
        this.setData({
          [`${rollName}.animation`]: `transform: translate3d(0, 0, 0);transition: none;`
        })
      }, duration)

    } else {
      this.setData({
        [`${rollName}.animation`]: `transform: translate3d(0, ${start}px, 0);transition: all ${duration}ms;`
      })
    }
  }, (duration + 1000))
}

Page({

  data: {
    animation: '',

    rollNotice: {
      rollName: 'rollNotice',
      animation: '',
      disabled: false,
      rollData: [
        {
          id: 1,
          title: '这是第一行'
        },
        {
          id: 2,
          title: '这是第二行啊啊'
        },
        {
          id: 3,
          title: '这是第三行啊啊啊啊啊'
        }
      ],
      start: 0
    }
  },

  onLoad() {
    oneRollNoticeObject.call(this, 'rollNotice')
    // roll.init()
  }
})