// pages/upload/upload.js
const One = require('../../OneUI/index');
Page(Object.assign({}, One.Upload, One.Table, {

  data: {

    upload: {
      objectName: 'upload',
      uploadName: 'fileImages',
      preUrlName: 'filePath',
      count: 0,
      size: 200,
      uploadUrl: 'https://www.imagine-yipin.com/UploadFiles.aspx',
      // images: [],
      hidden: false
    },

    uploadObj: {
      tableName: 'uploadObj',
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
          name: 'objectName',
          desc: 'upload名,用于确定传入对象名称',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 2,
          name: 'uploadName',
          desc: '文件对应的 key ,开发者在服务器端通过这个 key 可以获取到文件二进制内容',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 3,
          name: 'preUrlName',
          desc: '用于预览图片 src 的链接名',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 4,
          name: 'uploadUrl',
          desc: '上传的服务器 host',
          type: 'String',
          choose: '必填',
          default: '--'
        },
        {
          id: 5,
          name: 'count',
          desc: 'wx.previewImage 的 count 值',
          type: 'Number',
          choose: '--',
          default: '1'
        },
        {
          id: 6,
          name: 'images',
          desc: '存放上传的所有图片',
          type: 'Array',
          choose: '--',
          default: '[]'
        },
        {
          id: 7,
          name: 'color',
          desc: '删除按钮的颜色',
          type: 'String',
          choose: 'CSS 颜色',
          default: '#d9534f'
        },
        {
          id: 8,
          name: 'size',
          desc: '宽高控制，单位是 rpx ,无法修改',
          type: 'Number',
          choose: '--',
          default: '200'
        },
        {
          id: 9,
          name: 'hidden',
          desc: '用于隐藏上传按钮，可配合事件来控制上传数量',
          type: 'Boolean',
          choose: 'true / false',
          default: 'false'
        },
      ],
      scroll: true,
      border: false,
    },

    uploadEvent: {
      tableName: 'uploadEvent',
      head: [
        '事件名',
        '说明',
        '参数',
      ],
      bodyKey: ['name', 'desc', 'type'],
      rowKey: 'id',
      body: [
        {
          id: 1,
          name: 'handleOneUploadSuccess',
          desc: '上传成功触发，返回后端成功数据列表',
          type: '( fileList )'
        },
        {
          id: 2,
          name: 'handleOneUploadFail',
          desc: '上传失败触发，返回失败的相应',
          type: '( failResponse )'
        },
        {
          id: 3,
          name: 'handleOneUploadCancel',
          desc: '取消图片触发，返回取消的对象',
          type: '( file )'
        },
      ],
      scroll: true,
      border: false,
    }
  },

  //上传成功
  handleOneUploadSuccess(successList) {
    console.log(successList)
    if (successList.length >= 3) {
      this.setData({
        'upload.hidden': true
      })
    }
  },

  //上传失败
  handleOneUploadFail(fail) {
    console.log(fail)
  },

  //取消文件
  handleOneUploadCancel(file) {
    if (this.data.upload.images.length < 3) {
      this.setData({
        'upload.hidden': false
      })
    }
    console.log(file)
  }
}))