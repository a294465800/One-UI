const Tab = {
  _handleOneTabChange(e) {
    const dataset = e.currentTarget.dataset;
    const selectedId = dataset.id
    const tabName = dataset.tabName
    const data = { tabName, selectedId };

    console.info('[one:tab:change]', data);
    if (this.handleOneTabChange) {
      this.handleOneTabChange(data);
    } else {
      console.warn('页面缺少 handleOneTabChange 回调函数');
    }
  }
};

module.exports = Tab;