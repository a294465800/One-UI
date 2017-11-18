const Table = {
  _handleRowActive(e) {
    const dataset = e.currentTarget.dataset;
    const index = dataset.index;
    const tableName = dataset.tableName;
    const currentIndex = this.data[tableName].currentIndex;
    this.setData({
      [`${tableName}.currentIndex`]: index === currentIndex ? -1 : index
    });
    console.info('[one:table:row:active]', index);
    if (this.handleRowActive) {
      this.handleRowActive(this.data[tableName].body[index], index, currentIndex);
    } else {
      console.warn('页面缺少 handleRowActive 回调函数');
    }
  },
}

module.exports = Table