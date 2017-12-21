const Tab = {
  _handleOneTabChange(e) {
    const dataset = e.currentTarget.dataset;
    const selectedId = dataset.id
    const tabName = dataset.tabName
    const currentIndex =dataset.index
    // const data = { tabName, selectedId };
    this.setData({
      [`${tabName}.selected`]: selectedId
    })

    console.info('[one:tab:change]');
    if (this.handleOneTabChange) {
      this.handleOneTabChange(selectedId, currentIndex);
    } else {
      console.warn('页面缺少 handleOneTabChange 回调函数');
    }
  }
};

module.exports = Tab;