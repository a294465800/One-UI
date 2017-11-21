// pages/table/table.js
const One = require('../../OneUI/index');
Page(Object.assign({}, One.Table, {
  data: {
    table1: {
      tableName: 'table1',
      head: [
        '#',
        '网站名称',
        '网址',
        '创建时间',
      ],
      bodyKey: ['name', 'website', 'time'],
      body: [
        {
          id: 1,
          name: '百度',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        },
        {
          id: 2,
          name: '谷歌',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        },
        {
          id: 3,
          name: '搜狗',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        }
      ],
      currentIndex: -1,
      scroll: false,
      border: false,
      align: 'left'
    },
    table2: {
      tableName: 'table2',
      head: [
        '#',
        '网站名称',
        '网址',
        '创建时间',
      ],
      bodyKey: ['name', 'website', 'time'],
      body: [
        {
          id: 1,
          name: '百度',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        },
        {
          id: 2,
          name: '谷歌',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        },
        {
          id: 3,
          name: '搜狗',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        }
      ],
      currentIndex: -1,
      scroll: false,
      border: true,
      align: 'center',
      tips: '没有数据啦'
    },
    table3: {
      tableName: 'table3',
      head: [
        '#',
        '网站名称',
        '网址',
        '创建时间',
      ],
      bodyKey: ['name', 'website', 'time'],
      body: [
        {
          id: 1,
          name: '百度',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        },
        {
          id: 2,
          name: '谷歌',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        },
        {
          id: 3,
          name: '搜狗',
          website: 'http://www.baidu.com',
          time: '2017-10-21'
        }
      ],
      currentIndex: 2,
      scroll: true,
      border: false,
      align: 'left'
    },

    tableObj: {
      tableName: 'tableObj',
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
          name: 'tableName',
          desc: 'table名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'head',
          desc: '表头',
          type: 'Array',
          choose: '推荐填写',
          default: '--'
        },
        {
          id: 3,
          name: 'body',
          desc: '表内容,表循环数据',
          type: 'ArrayObject',
          choose: '--',
          default: '--'
        },
        {
          id: 4,
          name: 'bodyKey',
          desc: '表内容键值,用于获取数据',
          type: 'String',
          choose: 'body不为空时,必填',
          default: '--'
        },
        {
          id: 5,
          name: 'rowKey',
          desc: '优化循环 wx:key',
          type: 'String',
          choose: '选填',
          default: 'id'
        },
        {
          id: 6,
          name: 'currentIndex',
          desc: '当前激活的行',
          type: 'Number',
          choose: '选填',
          default: '-1'
        },
        {
          id: 7,
          name: 'scroll',
          desc: '开启 x 方向滚动模式',
          type: 'Bollean',
          choose: 'true / false',
          default: '--'
        },
        {
          id: 8,
          name: 'border',
          desc: '添加边框',
          type: 'Bollean',
          choose: 'true / false',
          default: '--'
        },
        {
          id: 9,
          name: 'align',
          desc: '对齐方式',
          type: 'String',
          choose: 'left / center / right',
          default: 'left'
        },
        {
          id: 10,
          name: 'tips',
          desc: '数据为空时候的缺省值,由于个人能力原因,scroll激活时,该属性无效',
          type: 'String',
          choose: '--',
          default: '暂无数据'
        },
      ],
      // currentIndex: 2,
      scroll: true,
      border: false,
    },

    tableEvent: {
      tableName: 'tableEvent',
      head: [
        '事件名',
        '说明',
        '参数'
      ],
      body: [
        {
          id: 1,
          name: 'handleOneTableRowActive',
          desc: '当某行被选中时触发该事件',
          params: 'row, index, currentIndex'
        }
      ],
      bodyKey: [
        'name',
        'desc',
        'params'
      ],
      scroll: true
    }
  },

  handleOneTableRowActive(row, index, currentIndex) {
    console.log(row, index, currentIndex)
  }

}))