// pages/tab/tab.js
const One = require('../../OneUI/index');
console.log(One)
Page(Object.assign({}, One.Tab, One.Table, {

  data: {
    tab1: {
      tabName: 'tab1',
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
      tabName: 'tab2',
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
      tabName: 'tab3',
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
      // color: '#26a2ff',
      fixed: true,
      scroll: true
    },

    tabObj: {
      tableName: 'tabObj',
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
          name: 'tabName',
          desc: 'tab名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'list',
          desc: '需要循环的导航数据',
          type: 'ArrayObject',
          choose: '必填',
          default: '--'
        },
        {
          id: 3,
          name: 'scroll',
          desc: '开启 x 方向滑动模式',
          type: 'Boolean',
          choose: 'true / false',
          default: 'false'
        },
        {
          id: 4,
          name: 'fixed',
          desc: '开启固定定位',
          type: 'Boolean',
          choose: 'true / false',
          default: 'false'
        },
        {
          id: 5,
          name: 'height',
          desc: '导航条高度,单位 px',
          type: 'Number',
          choose: '--',
          default: '45'
        },
        {
          id: 6,
          name: 'fontSize',
          desc: '字体大小,单位 px',
          type: 'Number',
          choose: '--',
          default: '14'
        },
        {
          id: 7,
          name: 'color',
          desc: '字体颜色,CSS 写法',
          type: 'String',
          choose: '--',
          default: '#ccc'
        },
        {
          id: 8,
          name: 'selected',
          desc: '当前激活的项',
          type: 'String',
          choose: '--',
          default: '--'
        },
      ],
      scroll: true,
      border: false,
    },

    tabEvent: {
      tableName: 'tabEvent',
      head: [
        '事件名',
        '说明',
        '参数'
      ],
      body: [
        {
          id: 1,
          name: 'handleOneTabChange',
          desc: '当导航被点击时触发',
          params: 'selectId, currentIndex'
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

  onLoad() {
  },

  handleOneTabChange(...arg) {
    console.log(...arg)
  }
})
)