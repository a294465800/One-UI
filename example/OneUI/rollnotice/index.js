const RollNotice = {
  init(rollName) {
    const rollData = this.data[rollName]
    let start = 0
    const length = rollData.rollData.length
    const height = rollData.height || 30
    const duration = rollData.duration || 500
    const speed = rollData.speed || 1500

    if (length === 1) {
      return false
    }

    const timer = setInterval(() => {
      if (this.data[rollName].disabled) {
        clearInterval(timer)
        return false
      }
      start -= height
      if (start <= -height * length) {
        this.setData({
          [`${rollName}._animation`]: `transform: translate3d(0,  ${start}px, 0);transition: all ${duration}ms;`
        })
        start = 0
        setTimeout(() => {
          this.setData({
            [`${rollName}._animation`]: `transform: translate3d(0, 0, 0);transition: none;`
          })
        }, duration)

      } else {
        this.setData({
          [`${rollName}._animation`]: `transform: translate3d(0, ${start}px, 0);transition: all ${duration}ms;`
        })
      }
    }, speed)
  }
}

module.exports = RollNotice