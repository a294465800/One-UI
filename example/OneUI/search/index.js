const Search = {

  _handleOneSearchInput(e) {
    const value = e.detail.value
    const searchName = e.currentTarget.dataset.searchName
    this.setData({
      [`${searchName}.value`]: value
    })
    console.info('[one:search:input]', { searchName, value });
    if (this.handleOneSearchInput) {
      this.handleOneSearchInput({ searchName, value: value ? value : '' });
    } else {
      console.warn('页面缺少 handleOneSearchInput 回调函数');
    }
  },

  _handleOneSearchCancel(e) {
    const searchName = e.currentTarget.dataset.searchName
    this.setData({
      [`${searchName}.value`]: ''
    })
  },

  _handleOneSearchExpand(e) {
    const searchName = e.currentTarget.dataset.searchName
    this.setData({
      [`${searchName}.expand`]: !this.data[searchName].expand
    })
  },

  _handleOneSearchTipBtn(e) {
    const searchName = e.currentTarget.dataset.searchName
    const value = e.target.dataset.value
    if (value) {
      this.setData({
        [`${searchName}.value`]: value
      })
      console.info('[one:search:input]', { searchName, value });
      if (this.handleOneSearchInput) {
        this.handleOneSearchInput({ searchName, value: value ? value : '' });
      } else {
        console.warn('页面缺少 handleOneSearchInput 回调函数');
      }
    } else {
      return false
    }
  },

  _handleOneSearchConfirm(e) {
    const searchName = e.currentTarget.dataset.searchName
    const value = this.data[searchName].value
    console.info('[one:search:confirm]', { searchName, value });
    if (this.handleOneSearchConfirm) {
      this.handleOneSearchConfirm({ searchName, value: value ? value : '' });
    } else {
      console.warn('页面缺少 handleOneSearchConfirm 回调函数');
    }
  },
}

module.exports = Search