// pages/search/search.js
const One = require('../../OneUI/index.js')
Page(Object.assign({}, One.Search, One.Table, {

  data: {
    search: {
      searchName: 'search',
      value: '',
      placeholder: '搜索店家',
    },
    search1: {
      searchName: 'search1',
      mode: 'expand',
      value: '',
      placeholder: '搜索店家',
      expand: false,
      history: true,
      histroyData: ['面包', '奶油', '鸡蛋', '香蕉', '苹果', '西红柿', '冰激凌', '肯德基', '功夫王（市桥分店）'],
      hot: true,
      hotData: ['麦当劳', '甜甜心炸鸡店', '寿司', '青瓜', '吃货王', '炸鸡啤酒']
    },
    searchObj: {
      tableName: 'searchObj',
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
          name: 'searchName',
          desc: 'search名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'mode',
          desc: 'search 模式',
          type: 'String',
          choose: 'inline / expand',
          default: 'inline'
        },
        {
          id: 3,
          name: 'placeholder',
          desc: 'input 的占位符',
          type: 'String',
          choose: '--',
          default: '--'
        },
        {
          id: 4,
          name: 'value',
          desc: 'search 的值',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 5,
          name: 'history',
          desc: '是否开启搜索历史, expand 模式下有效',
          type: 'Boolean',
          choose: 'true / false',
          default: 'false'
        },
        {
          id: 6,
          name: 'histroyData',
          desc: '搜索历史的数据， expand 模式下有效',
          type: 'Array',
          choose: '--',
          default: '--'
        },
        {
          id: 7,
          name: 'hot',
          desc: '是否开启热门搜索， expand 模式下有效',
          type: 'Boolean',
          choose: 'true / false',
          default: 'false'
        },
        {
          id: 8,
          name: 'hotData',
          desc: '热门搜索的数据， expand 模式下有效',
          type: 'Array',
          choose: '--',
          default: '--'
        }
      ],
      scroll: true,
      border: false,
    },

    searchEvent: {
      tableName: 'searchEvent',
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
          name: 'handleOneSearchInput',
          desc: 'input 事件， input 内容发生改变时触发',
          type: 'Function',
          choose: '( data )',
          default: 'searchName, value'
        },
        {
          id: 2,
          name: 'handleOneSearchConfirm',
          desc: '搜索按钮点击事件， expand 模式下有效',
          type: 'Function',
          choose: '( data )',
          default: 'searchName, value'
        },
      ],
      scroll: true,
      border: false,
    },
  },


  handleOneSearchInput(e) {
    console.log(e)
  },

  handleOneSearchConfirm(e) {
    console.log(e)
  }
}))