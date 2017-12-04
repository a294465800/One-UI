// pages/step/step.js
const One = require('../../OneUI/index.js')
Page(Object.assign({}, One.Table, {

  data: {
    step: {
      state: 2,
      theme: 'one',
      color: 'red',
      stepKey: {
        id: 'id',
        title: 'title',
        state: 'state'
      },
      steps: [
        {
          id: 1,
          title: '步骤一',
          state: 1
        },
        {
          id: 2,
          title: '步骤二',
          state: 2
        },
        {
          id: 3,
          title: '步骤三',
          state: 3
        },
        {
          id: 4,
          title: '步骤四',
          state: 4
        }
      ]
    },
    step2: {
      state: 3,
      theme: 'two',
      location: {
        start: '广州市',
        end: '佛山市'
      },
      stepKey: {
        id: 'id',
        title: 'name',
        state: 'state'
      },
      steps: [
        {
          id: 1,
          name: '已发货',
          state: 1
        },
        {
          id: 2,
          name: '运输中',
          state: 2
        },
        {
          id: 3,
          name: '派送中',
          state: 3
        },
        {
          id: 4,
          name: '已确认',
          state: 4
        }
      ]
    },

    stepObj: {
      tableName: 'stepObj',
      head: [
        '参数',
        '说明',
        '类型',
        '可选值',
        '默认',
      ],
      bodyKey: ['name', 'desc', 'type', 'choose', 'default'],
      rowKey: 'id',
      body: [
        {
          id: 1,
          name: 'theme',
          desc: 'step 主题',
          type: 'String',
          choose: 'one / two',
          default: 'one'
        },
        {
          id: 2,
          name: 'state',
          desc: '当前的状态',
          type: 'Number',
          choose: '--',
          default: '--'
        },
        {
          id: 3,
          name: 'stepKey',
          desc: '数据的键值名称 { id, title, state}',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 4,
          name: 'location',
          desc: '主题二时选填 { start, end}',
          type: 'String',
          choose: '选填',
          default: '--'
        },
        {
          id: 5,
          name: 'steps',
          desc: '循环数据',
          type: 'ArrayObject',
          choose: '必填',
          default: '--'
        },
        {
          id: 6,
          name: 'color',
          desc: '颜色， CSS 写法',
          type: 'String',
          choose: '#04be02',
          default: ''
        }
      ],
      scroll: true,
      border: false,
    },
  },

}))