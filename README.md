# One-UI

### 备注
#### 一、 z-index 使用规范
> 根据 WeUI 的页面层级，从最靠近用户一层开始，分为 PopOut、Mask、Navigation、Content，定义的`z-index`依次为 1000, 100, 10, 1起。如： Content 可选值区间为 [1-9]。


1. Tab 组件：Tab 的根元素层级是 `z-index: 10`，拥有该样式的 class 是`__one-tab-fixed`。
2. Popup 样式： Popup 的遮罩层层级是 `z-index: 1000`，拥有该样式的 class 是`one-popup-mask`。 Popup 的内容层层级是 `z-index: 1001`，拥有该样式的 class 是`one-popup-top/middle/bottom`