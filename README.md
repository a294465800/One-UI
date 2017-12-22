<h1 align=center> One-UI </h1>

## 使用
1. 复制`One-UI`文件夹
2. 按需引入，只需引入对应`wxss` `template` `js`即可，如引入 Search 组件

target.wxml 中
```html
<import src="/OneUI/search/index.wxml" />
<template is="one-search" data="{{search: search}}"></template>
```
target.wxss 中
```css
@import '/OneUI/search/index.wxss';
```
target.js 中
```js
const Search = require('/OneUI/search/index.js')
Page(Object.assign({}, Search, {
  data: {},
  onLoad(){},
  
  handleOneSearchInput(e) {
    console.log(e)
  },

  handleOneSearchConfirm(e) {
    console.log(e)
  },
  
  ...
}))
```
![示例一](http://www.shiningjack.com/assets/uploads/search.jpg)  ![示例二](http://www.shiningjack.com/assets/uploads/search1.jpg)

## 示例
打开小程序 IDE，以`example`文件夹新建项目，记得打开不校验安全域名。示例小程序有使用方法，也可随意扩展。

## 备注
#### z-index 使用规范
> 根据 WeUI 的页面层级，从最靠近用户一层开始，分为 PopOut、Mask、Navigation、Content，定义的`z-index`依次为 1000, 100, 10, 1起。如： Content 可选值区间为 [1-9]。


1. Tab 组件：Tab 的根元素层级是 `z-index: 10`，拥有该样式的 class 是`__one-tab-fixed`。
2. Popup 样式： Popup 的遮罩层层级是 `z-index: 1000`，拥有该样式的 class 是`one-popup-mask`。 Popup 的内容层层级是 `z-index: 1001`，拥有该样式的 class 是`one-popup-top/middle/bottom`
3. Search 组件： 清空搜索内容按钮`z-index: 10`，拥有该样式的是`__one-search-theme2-cancel-icon active`。搜索展开模式的根元素`z-index: 100`，拥有该样式的是`__one-search-theme2-mask`，展开模式后的搜索框`z-index: 101`，拥有该样式的是`__one-search-theme2.active .__one-search-theme2-label`
#### 参考
> 组件使用小程序的`template`容器写，因为`component`的写法有兼容性问题。

该 UI 参考了：

[YDUI](http://vue.ydui.org/) | [Mint UI](http://mint-ui.github.io/#!/zh-cn) | [vux](https://vux.li/#/) | [zanui](https://github.com/youzan/zanui-weapp)
