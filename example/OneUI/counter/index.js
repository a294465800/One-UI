
function counerCalculate(e, value) {
  const currentDataset = e.currentTarget.dataset
  const counterName = currentDataset.counterName
  const couterData = this.data[counterName]
  const currentValue = couterData.value * 1 || 0
  const min = couterData.min * 1 || 0
  const max = couterData.max * 1 || 0
  if (currentValue + value >= min && currentValue + value <= max) {
    this.setData({
      [`${counterName}.value`]: currentValue + value
    })
    if (this.handleOneCounterChange) {
      this.handleOneCounterChange(this.data[e.currentTarget.dataset.counterName])
    } else {
      console.warn('页面缺少 handleOneCounterChange 回调函数');
    }
  } else {
    return false
  }
}

const Counter = {

  _handleOneCounterOperation(e) {
    const targetData = e.target.dataset
    const counterType = targetData.type
    switch (counterType) {
      case 'minus':
        counerCalculate.call(this, e, -1)
        break
      case 'plus':
        counerCalculate.call(this, e, 1)
        break
      default:
        return false
    }
  },

  _handleOneCounterInput(e) {
    const dataset = e.currentTarget.dataset
    const counterName = dataset.counterName
    let currentValue = e.detail.value
    const min = this.data[counterName].min
    const max = this.data[counterName].max
    if (currentValue >= max) {
      currentValue = max
    }
    if (currentValue <= min) {
      currentValue = min
    }

    this.setData({
      [`${counterName}.value`]: currentValue * 1
    })
    if (this.handleOneCounterChange) {
      this.handleOneCounterChange(this.data[counterName])
    } else {
      console.warn('页面缺少 handleOneCounterChange 回调函数');
    }
  },
}

module.exports = Counter