// pages/counter/counter.js
const One = require('../../OneUI/index.js')

Page(Object.assign({}, One.Counter, One.Table, {
  data: {
    counter: {
      counterName: 'counter',
      value: 1,
      min: 1,
      max: 20,
    },
    counter1: {
      counterName: 'counter1',
      value: 3,
      min: 1,
      max: 10,
      size: 'small'
    },
    counter2: {
      counterName: 'counter1',
      value: 3,
      min: 1,
      max: 10,
      disabled: true
    },

    counterObj: {
      tableName: 'counterObj',
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
          name: 'counterName',
          desc: 'counter名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'value',
          desc: '计数器的 value 值',
          type: 'Number',
          choose: '--',
          default: '0'
        },
        {
          id: 3,
          name: 'min',
          desc: '计数器的最小值',
          type: 'Number',
          choose: '--',
          default: '0'
        },
        {
          id: 4,
          name: 'max',
          desc: '计数器的最大值',
          type: 'Number',
          choose: '--',
          default: '0'
        },
        {
          id: 5,
          name: 'size',
          desc: '计数器尺寸',
          type: 'String',
          choose: 'small / normal',
          default: 'normal'
        },
        {
          id: 6,
          name: 'disabled',
          desc: '计数器是否禁用',
          type: 'Boolean',
          choose: 'true / false',
          default: 'false'
        }
      ],
      scroll: true,
      border: false,
    },

    counterEvent: {
      tableName: 'counterEvent',
      head: [
        '参数',
        '说明',
        '类型',
        '参数',
        '参数说明',
      ],
      bodyKey: ['name', 'desc', 'type', 'choose', 'default'],
      rowKey: 'id',
      body: [
        {
          id: 1,
          name: 'handleOneCounterChange',
          desc: '计数器的 value 值发生改变时触发',
          type: 'Function',
          choose: '( data )',
          default: '整个计数器对象 {countName, value, min, max}'
        },
      ],
      scroll: true,
      border: false,
    },
  },

  handleOneCounterChange(data) {
    console.log(data)
  }
}))