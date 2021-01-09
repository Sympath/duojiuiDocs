
<h1>基础用法</h1>
栅格布局：我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。


# 子项目属性

<demo-block>
::: slot source
<layout-span></layout-span>
:::

## span控制所占空间，一行总数24
::: slot highlight

``` html

    <dj-row>
        <dj-col :span="12"> <div>12：50%</div></dj-col>
        <dj-col :span="12"> <div>12：50%</div></dj-col>
    </dj-row>
```
:::
</demo-block>
<demo-block>
::: slot source
<layout-offset></layout-offset>
:::

## offset控制元素间距
设置offset会空出元素右侧对应数量的空间

::: slot highlight
``` html
     <dj-row>
        <dj-col :span="8" > <div>8：33.33%</div></dj-col>
        <dj-col :span="8" > <div :offset="8">8：33.33%</div></dj-col>
    </dj-row>
```
:::
</demo-block>

# 容器属性
<demo-block>
::: slot source
<layout-gutter></layout-gutter>
:::

## gutter控制子项目间间距，单位px

::: slot highlight

``` html
    <dj-row :gutter="16">
        <dj-col :span="12"> <div>111</div></dj-col>
        <dj-col :span="12"> <div>222</div></dj-col>
    </dj-row>
```
:::
</demo-block>
<demo-block>
::: slot source
<layout-justify></layout-justify>
:::

## 弹性布局
justify设置主轴排布 end则靠右排布

::: slot highlight

``` html
    <dj-row justify="end">
        <dj-col :span="4"> <div>col-4</div></dj-col>
        <dj-col :span="4"> <div>col-4</div></dj-col>
    </dj-row>
```
:::
</demo-block>
<demo-block>
::: slot source
<layout-flexibale></layout-flexibale>
:::

## 响应式布局

::: slot highlight

``` html
    <dj-row>
        <dj-col :xs="2" :sm="4" :md="6" :lg="8"><div>Col</div></dj-col>
        <dj-col :xs="20" :sm="16" :md="12" :lg="8"><div>Col</div></dj-col>
        <dj-col :xs="2" :sm="4" :md="6" :lg="8"><div>Col</div></dj-col>
    </dj-row>
```
:::
</demo-block>
