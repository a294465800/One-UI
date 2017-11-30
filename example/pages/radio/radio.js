// pages/radio/radio.js
const One = require('../../OneUI/index.js')
Page(Object.assign({}, One.Radio, One.Table, {

  data: {
    radio1: {
      radioName: 'radio1',
      radios: [
        '选项一',
        '选项二',
        '选项三',
        '选项四',
      ],
    },


    radio2: {
      radioName: 'radio2',
      type: 'ArrayObject',
      radioKey: {
        value: 'id',
        title: 'name'
      },
      radios: [{
        id: 1,
        name: '选项一'
      },
      {
        id: 2,
        name: '选项二'
      },
      {
        id: 3,
        name: '选项三'
      }],

      size: 15,
      color: 'red'
    },

    radioObj: {
      tableName: 'radioObj',
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
          name: 'radioName',
          desc: 'radio名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'type',
          desc: '传入的数据类型',
          type: 'String',
          choose: 'Array/ArrayObject',
          default: 'Array'
        },
        {
          id: 3,
          name: 'radioKey',
          desc: '数组对象的键值,有两个参数 value,title',
          type: 'Object',
          choose: '当 type 为 ArrayObject时必填',
          default: '--'
        },
        {
          id: 4,
          name: 'radios',
          desc: '用于循环 radio 的数据',
          type: 'Array/ArrayObject',
          choose: '必填',
          default: '--'
        },
        {
          id: 5,
          name: 'size',
          desc: '字体大小， icon 大小',
          type: 'Number',
          choose: '--',
          default: '14'
        },
        {
          id: 6,
          name: 'color',
          desc: '激活状态颜色， CSS 格式的颜色',
          type: 'String',
          choose: '--',
          default: '#0aba07'
        }
      ],
      scroll: true,
      border: false,
    },

    radioEvent: {
      tableName: 'radioEvent',
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
          name: 'handleOneRadioChange',
          desc: '单选选中时触发',
          type: 'Function',
          choose: '( value )',
          default: '选中的项'
        },
      ],
      scroll: true,
      border: false,
    },

  },

  handleOneRadioChange(value) {
    console.log(value)
  }

}))