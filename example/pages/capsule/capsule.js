// pages/capsule/capsule.js
const One = require('../../OneUI/index.js')
Page(Object.assign({}, One.Table, {

  data: {
    options1: {
      leftText: '限购',
      rightText: '一折'
    },
    options2: {
      scale: '1',
      color: '#04be02',
      leftText: '限购',
      rightText: '一折'
    },

    usage: {
      tableName: 'usage',
      rowKey: "id",
      head: [
        '参数',
        '说明',
        '类型',
        '可选值',
        '默认',
      ],
      bodyKey: ['name', 'desc', 'type', 'choose', 'default'],
      body: [
        {
          id: 1,
          name: 'scale',
          desc: '胶囊的放大系数',
          type: 'Number',
          choose: '--',
          default: 0.8
        },
        {
          id: 2,
          name: 'color',
          desc: '胶囊颜色',
          type: 'String',
          choose: 'CSS 颜色',
          default: '#999'
        },
        {
          id: 3,
          name: 'leftText',
          desc: '左侧文字',
          type: 'String',
          choose: '--',
          default: '--'
        },
        {
          id: 4,
          name: 'rightText',
          desc: '右侧文字',
          type: 'String',
          choose: '--',
          default: '--'
        }
      ],
      scroll: true,
    }
  },
}))