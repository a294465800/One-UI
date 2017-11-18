// pages/badge/badge.js
const One = require('../../OneUI/index');
Page(Object.assign({}, One.Table, {

  data: {
    badgeObj: {
      tableName: 'tableObj',
      head: [
        'class名',
        '说明'
      ],
      bodyKey: ['name', 'desc'],
      rowKey: 'id',
      body: [
        {
          id: 1,
          name: 'one-badge',
          desc: '启用样式',
        },
        {
          id: 2,
          name: 'small',
          desc: '小尺寸徽章',
        },
        {
          id: 3,
          name: 'large',
          desc: '大尺寸徽章',
        },
      ],
      // currentIndex: 2,
      scroll: true,
      border: false,
    },
  },

}))