// pages/tab/tab.js
Page({

  data: {
    tab: {
      list: [
        {
          id: 1,
          name: '导航一'
        },
        {
          id: 2,
          name: '导航二'
        },
        {
          id: 3,
          name: '导航三'
        },
        {
          id: 4,
          name: '导航四'
        }
      ],
      selected: '1',
      color: '#ef4f4f'
    },

    tabName: "tab"
  },

  tabSwitch(e) {
    const id = e.currentTarget.dataset.id
    const tabName = e.currentTarget.dataset.tabName
    console.log(id, tabName)
    this.setData({
      [`${tabName}.selected`]: id
    })
  }

})