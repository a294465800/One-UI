// pages/list/list.js
const One = require('../../OneUI/index.js')
Page(Object.assign({}, One.Tab, One.List, One.Table, {
  data: {
    currentIndex: 0,
    tab: {
      tabName: 'tab',
      list: [
        {
          id: 1,
          name: '主题一'
        },
        {
          id: 2,
          name: '主题二'
        },
        {
          id: 3,
          name: '主题三'
        },
        {
          id: 4,
          name: '主题四'
        },
        {
          id: 5,
          name: '使用说明'
        },
      ],
      selected: '1',
      color: '#ef4f4f',
      fixed: true
    },

    list: {
      listName: 'list',
      listKey: {
        id: 'id',
        title: 'title',
        price: 'price',
        oldPrice: 'oldPrice',
        subTitle: 'subTitle',
        img: 'img'
      },
      list: [
        {
          id: 1,
          title: '这是一段标题',
          price: 79,
          oldPrice: 85,
          subTitle: '这是副标题',
          img: 'http://img02.tooopen.com/images/20151221/tooopen_sy_152293664918.jpg'
        },
        {
          id: 2,
          title: '这是一段标题',
          price: 100,
          oldPrice: 120,
          subTitle: '这是副标题',
          img: 'http://img.sc115.com/uploads/sc/jpgs/0117apic3188_sc115.com.jpg'
        },
        {
          id: 3,
          title: '这是一段标题',
          price: 120,
          oldPrice: 150,
          subTitle: '这是副标题',
          img: 'http://www.wzsky.net/a/a.jpg'
        },
        {
          id: 4,
          title: '这是一段标题',
          price: 36,
          oldPrice: 42,
          subTitle: '这是副标题',
          img: 'http://img6.bdstatic.com/img/image/smallpic/fengjingxiaotu.jpg'
        },
        {
          id: 5,
          title: '这是一段标题',
          price: 10,
          oldPrice: 15,
          subTitle: '这是副标题',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfmTj4hpIdO0MqJa_1G8KWzBFuGKMCHcI8C6TOI1dMGwmnIS4og'
        },
        {
          id: 6,
          title: '这是一段标题',
          price: 9,
          oldPrice: 14,
          subTitle: '这是副标题',
          img: 'http://img.sc115.com/uploads/sc/jpgs/0919apic942_sc115.com.jpg'
        }
      ],
    },

    list1: {
      listName: 'list1',
      key: 'id',
      listKey: {
        id: 'id',
        title: 'title',
        price: 'price',
        oldPrice: 'oldPrice',
        subTitle: 'subTitle',
        img: 'img',
        remark: 'remark'
      },
      list: [
        {
          id: 1,
          title: '这是一段标题',
          price: 79,
          oldPrice: 85,
          subTitle: '这是副标题',
          img: 'http://img02.tooopen.com/images/20151221/tooopen_sy_152293664918.jpg',
          remark: '这是一些备注'
        },
        {
          id: 2,
          title: '这是一段标题',
          price: 100,
          oldPrice: 120,
          subTitle: '这是副标题',
          img: 'http://img.sc115.com/uploads/sc/jpgs/0117apic3188_sc115.com.jpg',
          remark: '这是一些备注'
        },
        {
          id: 3,
          title: '这是一段标题',
          price: 120,
          oldPrice: 150,
          subTitle: '这是副标题',
          img: 'http://www.wzsky.net/a/a.jpg',
          remark: '这是一些备注'
        },
        {
          id: 4,
          title: '这是一段标题',
          price: 36,
          oldPrice: 42,
          subTitle: '这是副标题',
          img: 'http://img6.bdstatic.com/img/image/smallpic/fengjingxiaotu.jpg',
          remark: '这是一些备注'
        },
        {
          id: 5,
          title: '这是一段标题',
          price: 10,
          oldPrice: 15,
          subTitle: '这是副标题',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfmTj4hpIdO0MqJa_1G8KWzBFuGKMCHcI8C6TOI1dMGwmnIS4og',
          remark: '这是一些备注'
        },
        {
          id: 6,
          title: '这是一段标题',
          price: 9,
          oldPrice: 14,
          subTitle: '这是副标题',
          img: 'http://img.sc115.com/uploads/sc/jpgs/0919apic942_sc115.com.jpg',
          remark: '这是一些备注'
        }
      ],
    },

    listObj: {
      tableName: 'listObj',
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
          name: 'listName',
          desc: 'list 名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'key',
          desc: 'wx:key',
          type: 'String',
          choose: '--',
          default: 'id'
        },
        {
          id: 3,
          name: 'listKey',
          desc: 'list 数据键值，一一对应，只有主题三有 remark 键值',
          type: 'String',
          choose: `{
              id,
              title,
              price,
              oldPrice,
              subTitle,
              img,
              remark
            }`,
          default: '--'
        },
        {
          id: 4,
          name: 'list',
          desc: 'list 循环数据',
          type: 'ArrayObject',
          choose: '--',
          default: '--'
        }
      ],
      currentIndex: -1,
      scroll: true,
      border: false,
      align: 'left'
    },

    fncObj: {
      tableName: 'fncObj',
      head: [
        '函数名',
        '说明',
        '类型',
        '参数',
        '默认',
      ],
      bodyKey: ['name', 'desc', 'type', 'choose', 'default'],
      rowKey: 'id',
      body: [
        {
          id: 1,
          name: 'priceFormat',
          desc: '格式化价格',
          type: 'Function',
          choose: '(value)',
          default: '--'
        },
        {
          id: 2,
          name: 'oldPriceFormat',
          desc: '格式化原价价格',
          type: 'Function',
          choose: '(value)',
          default: '--'
        },
      ],
      currentIndex: -1,
      scroll: true,
      border: false,
      align: 'left'
    },

    eventObj: {
      tableName: 'eventObj',
      head: [
        '事件名',
        '说明',
        '类型',
        '参数',
        '默认',
      ],
      bodyKey: ['name', 'desc', 'type', 'choose', 'default'],
      rowKey: 'id',
      body: [
        {
          id: 1,
          name: 'handleOneListClick',
          desc: '每个项点中之后触发',
          type: 'Function',
          choose: '(currentIndex, item)',
          default: '--'
        },
      ],
      currentIndex: -1,
      scroll: true,
      border: false,
      align: 'left'
    }

  },

  handleOneTabChange(selectId, currentIndex) {
    this.setData({
      currentIndex
    })
  },

  handleOneListClick(index, item) {
    console.log(index, item)
  },

}))