const List = {

  _handleOneListClick(e) {
    const dataset = e.currentTarget.dataset
    const currentIndex = dataset.index
    const listName = dataset.listName
    const item = this.data[listName].list[currentIndex]
    console.info('[one:list:click]', currentIndex, item);
    if (this.handleOneListClick) {
      this.handleOneListClick(currentIndex, item);
    } else {
      console.warn('页面缺少 handleOneListClick 回调函数');
    }
  }
}

module.exports = List