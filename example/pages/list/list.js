// pages/list/list.js
const One = require('../../OneUI/index.js')
Page(Object.assign({}, One.Tab, {
  data: {
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
      ],
      selected: '1',
      color: '#ef4f4f',
      fixed: true
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
    list1: [
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
    currentIndex: 0
  },

  handleOneTabChange(selectId, currentIndex) {
    this.setData({
      currentIndex
    })
  }

}))