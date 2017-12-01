// pages/rollnotice/rollnotice.js

const One = require('../../OneUI/index.js')

Page(Object.assign({}, One.Table, {

  data: {
    animation: '',

    rollNotice: {
      rollName: 'rollNotice',
      rollKey: {
        id: 'id',
        title: 'title'
      },
      disabled: false,
      rollData: [
        {
          id: 1,
          title: '这是第一行'
        },
        {
          id: 2,
          title: '这是第二行啊啊'
        },
        {
          id: 3,
          title: '这是第三行啊啊啊啊啊'
        }
      ],
      duration: 500,
    },
    rollNotice1: {
      rollName: 'rollNotice1',
      rollKey: {
        id: 'id',
        title: 'title'
      },
      disabled: false,
      rollData: [
        {
          id: 1,
          title: '3秒后切换'
        },
        {
          id: 2,
          title: '切换了一次'
        },
        {
          id: 3,
          title: '切换了两次'
        },
        {
          id: 4,
          title: '切换了三次'
        }
      ],
      duration: 500,
      speed: 3000,
      height: 40,
      color: 'red'
    },

    rollObject: {
      tableName: 'rollObject',
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
          name: 'rollName',
          desc: 'rollNotice名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'rollKey',
          desc: '指定循环数据的键值',
          type: 'String',
          choose: '必填 { id, title }',
          default: '--'
        },
        {
          id: 3,
          name: 'disabled',
          desc: '是否禁用，禁用后无法在原基础上二次启动',
          type: 'Boolean',
          choose: 'true / false',
          default: '--'
        },
        {
          id: 4,
          name: 'rollData',
          desc: '用于循环 rollNotice 的数据',
          type: 'ArrayObject',
          choose: '必填',
          default: '--'
        },
        {
          id: 5,
          name: 'duration',
          desc: '切换动画持续时间，单位 ms',
          type: 'Number',
          choose: '--',
          default: '500'
        },
        {
          id: 6,
          name: 'speed',
          desc: '切换速度，单位 ms',
          type: 'Number',
          choose: '--',
          default: '1500'
        },
        {
          id: 7,
          name: 'height',
          desc: '公告高度，单位 px',
          type: 'Number',
          choose: '--',
          default: '30'
        },
        {
          id: 8,
          name: 'color',
          desc: '颜色， CSS 规则',
          type: 'String',
          choose: '--',
          default: '#000'
        }
      ],
      scroll: true,
      border: false,
    },

    rollEvent: {
      tableName: 'rollEvent',
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
          name: 'handleOneRollNoticeTap',
          desc: '公告点击时触发，已经在节点上添加了 data 属性：index, id, rollName，通过原 event 对象的 target 和 currentTarget 对象访问得到',
          type: 'Function',
          choose: '( e )',
          default: 'index, id, rollName'
        },
      ],
      scroll: true,
      border: false,
    },

  },

  onLoad() {
    One.RollNotice.init.call(this, 'rollNotice')
    One.RollNotice.init.call(this, 'rollNotice1')
  },

  handleOneRollNoticeTap(e) {
    console.log(e)
  },

  handleOneRollNoticeChange() {
    console.log(1)
  }
}))