/**
 * create a new upload Object, contains some basic value and function
 * @param {String} objectName name of this data object
 * @param {String} uploadName key name of this upload formData
 * @param {String} uploadUrl upload api's host
 */
function uploadObject(objectName, uploadName, uploadUrl, preUrlName) {
  this.objectName = objectName
  this.uploadName = uploadName
  this.uploadUrl = uploadUrl
  this.preUrlName = preUrlName
  this.uploadStart = 0
  this.results = []
  if (objectName === undefined) {
    console.warn('缺少 objectName')
  }
  if (uploadName === undefined) {
    console.warn('缺少 uploadName')
  }
  if (uploadUrl === undefined) {
    console.warn('缺少 uploadUrl')
  }
  if (preUrlName === undefined) {
    console.warn('缺少 preUrlName')
  }
}

/**
 * save the length of the images list for the loop function,then start to upload image
 * @param {ArrayObject} fileList the images that need to be sent
 */
uploadObject.prototype.beforeUpload = function (fileList, successFnc, failFnc) {
  this.uploadNumber = fileList.length
  this.fileList = fileList
  this.successCallback = successFnc
  this.failCallback = failFnc
  if (this.uploadNumber > 0) {
    this.uploadFunction()
  } else {
    return false
  }
}

/**
 * @param {ArrayObject} fileList the images that need to be sent
 */
uploadObject.prototype.uploadFunction = function () {
  if (this.uploadStart < this.uploadNumber) {
    wx.uploadFile({
      url: this.uploadUrl,
      filePath: this.fileList[this.uploadStart].path,
      name: this.uploadName,
      success: uploadSuccess => {
        if (uploadSuccess.statusCode !== 200) {
          console.warn('上传出错！')
          typeof this.failCallback === 'function' && this.failCallback(uploadSuccess)
        } else {
          let tmp = JSON.parse(uploadSuccess.data)
          let imgItem
          if (tmp.data) {
            imgItem = tmp.data
            imgItem._oneImgUrl = tmp.data[this.preUrlName]
          } else {
            imgItem = tmp
            imgItem._oneImgUrl = tmp[this.preUrlName]
          }
          this.results.push(imgItem)
          this.uploadFunction()
        }
      }
    })
    this.uploadStart++
  } else {
    console.info('全部上传成功！')
    typeof this.successCallback === 'function' && this.successCallback(this.results)
  }
}

const Upload = {

  _handleOneUpload(e) {
    const dataset = e.currentTarget.dataset
    const objectName = dataset.objectName
    const uploadName = dataset.uploadName
    const uploadUrl = dataset.uploadUrl
    const preUrlName = dataset.preUrlName

    wx.chooseImage({
      success: res => {
        let uploadInstance = new uploadObject(objectName, uploadName, uploadUrl, preUrlName)
        uploadInstance.beforeUpload(res.tempFiles, successList => {
          const originData = this.data[objectName].images || []
          this.setData({
            [`${objectName}.images`]: [...originData, ...successList]
          })
          if (this.handleOneUploadSuccess) {
            this.handleOneUploadSuccess(successList)
          } else {
            console.warn('页面缺少 handleOneUploadSuccess 回调函数');
          }
        }, fail => {
          if (this.handleOneUploadFail) {
            this.handleOneUploadFail(fail)
          } else {
            console.warn('页面缺少 handleOneUploadFail 回调函数');
          }
        })
      },
    })
  },

  _handleOneUploadCancel(e) {
    const dataset = e.currentTarget.dataset
    const index = dataset.index
    const objectName = dataset.objectName
    let imagesList = this.data[objectName].images
    const cancelFile = imagesList.splice(index, 1)
    this.setData({
      [`${objectName}.images`]: imagesList
    })
    if (this.handleOneUploadCancel) {
      this.handleOneUploadCancel(cancelFile)
    } else {
      console.warn('页面缺少 handleOneUploadCancel 回调函数');
    }
  },
}

module.exports = Upload