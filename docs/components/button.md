# 按钮组件

按钮是用户界面中最基础也最重要的交互元素之一。本文档详细介绍按钮组件的使用方法、属性配置和最佳实践。

## 基础用法

按钮组件提供了简洁的 API，您可以通过简单的标记快速创建各种样式的按钮：

```vue
<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
```

## 按钮类型

组件支持多种预设类型，每种类型都有对应的视觉样式和语义含义：

- **default** - 默认按钮，用于常规操作
- **primary** - 主要按钮，用于主要操作
- **success** - 成功按钮，用于确认操作
- **warning** - 警告按钮，用于需要注意的操作
- **danger** - 危险按钮，用于删除等危险操作

## 尺寸规格

按钮提供了三种尺寸规格，适应不同的使用场景：

```vue
<Button size="small">小型按钮</Button>
<Button size="medium">中型按钮</Button>
<Button size="large">大型按钮</Button>
```

小型按钮适合在表格或卡片中使用，中型是默认尺寸，大型按钮则适合用作页面的主要行动号召。

## 禁用状态

通过 `disabled` 属性可以禁用按钮，禁用后的按钮无法点击且样式会变灰：

```vue
<Button disabled>禁用按钮</Button>
```

## 加载状态

在执行异步操作时，可以显示加载状态，给用户明确的反馈：

```vue
<Button loading>加载中...</Button>
```

加载状态下，按钮会显示加载动画，并且自动禁用点击事件。

## 图标按钮

按钮可以包含图标，提升视觉表现力和可用性：

```vue
<Button icon="search">搜索</Button>
<Button icon="delete" type="danger">删除</Button>
```

图标会自动与文字保持适当的间距，您也可以创建纯图标按钮。

## 块级按钮

块级按钮会占据父容器的全部宽度，适合在移动端或需要强调的场景使用：

```vue
<Button block>块级按钮</Button>
```

## 按钮组

将多个相关按钮组合在一起，形成按钮组：

```vue
<ButtonGroup>
  <Button>左</Button>
  <Button>中</Button>
  <Button>右</Button>
</ButtonGroup>
```

## 事件处理

按钮支持标准的点击事件和其他鼠标事件，您可以绑定处理函数来实现交互逻辑。

## 无障碍访问

按钮组件遵循 WAI-ARIA 标准，支持键盘导航和屏幕阅读器，确保所有用户都能正常使用。

通过合理使用按钮组件的各种特性，您可以创建出既美观又易用的用户界面。
