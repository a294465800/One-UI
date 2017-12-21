const Radio = {
  _handleOneRadioChange(e) {
    const value = e.detail.value
    const name = e.currentTarget.dataset.name
    this.setData({
      [`${name}.currentRadio`]: value
    })
    console.info('[one:radio:checked]', value);
    if (this.handleOneRadioChange) {
      this.handleOneRadioChange(value);
    } else {
      console.warn('页面缺少 handleOneRadioChange 回调函数');
    }
  }
}

module.exports = Radio