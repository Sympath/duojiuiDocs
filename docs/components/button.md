# Button组件
常用的操作按钮。
## 基础用法
基础的按钮用法。

<demo-block>
::: slot source
<button-type></button-type>
:::

使用type属性来定义 Button 的样式。

::: slot highlight

``` html
    <dj-button>默认按钮</dj-button>
    <dj-button type="primary">主要按钮</dj-button>
    <dj-button type="success">成功按钮</dj-button>
    <dj-button type="info">信息按钮</dj-button>
    <dj-button type="warning">警告按钮</dj-button>
    <dj-button type="danger">危险按钮</dj-button>
```
:::
</demo-block>


<demo-block>
::: slot source
<button-icon></button-icon>
:::

带icon的按钮

::: slot highlight

``` html
     <dj-button :icon='icon' iconPosition="left" type="warning">默认按钮</dj-button>
    <dj-button :icon='icon' iconPosition="right" type="warning">默认按钮</dj-button>
```
:::
</demo-block>


<demo-block>
::: slot source
<button-loading></button-loading>
:::

loading态的按钮

::: slot highlight

``` html
    <dj-button :icon='icon'  loading iconPosition="right" type="warning">默认按钮</dj-button>
```
:::
</demo-block>

<demo-block>
::: slot source
<button-group></button-group>
:::

按钮组

::: slot highlight

``` html
     <dj-button-group>
        <dj-button icon='leftarrow' iconPosition="left" type="warning">默认按钮</dj-button>
        <dj-button icon='youjiantou' @click="handleClick" iconPosition="right" type="warning">默认按钮</dj-button>
      </dj-button-group>
```
:::
</demo-block>
