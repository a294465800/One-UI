// pages/tab/tab.js
const One = require('../../OneUI/index');
Page(Object.assign({}, One.Tab, {

  data: {
    tab1: {
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
        },
        {
          id: 5,
          name: '导航五'
        },
        {
          id: 6,
          name: '导航六'
        }
      ],
      selected: '1',
      color: '#ef4f4f',
      scroll: true
    },
    tab2: {
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
        },
        {
          id: 5,
          name: '导航五'
        },
        {
          id: 6,
          name: '导航六'
        }
      ],
      selected: '2',
      color: '#26a2ff',
      scroll: false,
      height: 80,
      fontSize: 14
    },
    tab3: {
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
        },
        {
          id: 5,
          name: '导航五'
        },
        {
          id: 6,
          name: '导航六'
        }
      ],
      selected: '2',
      color: '#26a2ff',
      fixed: true,
      scroll: true
    },

  },

  onLoad() {
    console.log(this)
  },

  handleOneTabChange(data) {
    const id = data.selectedId
    const tabName = data.tabName
    this.setData({
      [`${tabName}.selected`]: id
    })
  }
})
)