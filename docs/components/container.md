# 上下布局
<demo-block>
::: slot source
<container-index></container-index>
:::


::: slot highlight

``` html
    <dj-container>
      <dj-header>Header</dj-header>
      <dj-main>Main</dj-main>
    </dj-container>

    <dj-container>
      <dj-header>Header</dj-header>
      <dj-main>Main</dj-main>
      <dj-footer>Footer</dj-footer>
    </dj-container>

    <dj-container>
      <dj-aside width="200px">Aside</dj-aside>
      <dj-main>Main</dj-main>
    </dj-container>

    <dj-container>
      <dj-header>Header</dj-header>
      <dj-container>
        <dj-aside width="200px">Aside</dj-aside>
        <dj-main>Main</dj-main>
      </dj-container>
    </dj-container>

    <dj-container>
      <dj-header>Header</dj-header>
      <dj-container>
        <dj-aside width="200px">Aside</dj-aside>
        <dj-container>
          <dj-main>Main</dj-main>
          <dj-footer>Footer</dj-footer>
        </dj-container>
      </dj-container>
    </dj-container>

    <dj-container>
      <dj-aside width="200px">Aside</dj-aside>
      <dj-container>
        <dj-header>Header</dj-header>
        <dj-main>Main</dj-main>
      </dj-container>
    </dj-container>

    <dj-container>
      <dj-aside width="200px">Aside</dj-aside>
      <dj-container>
        <dj-header>Header</dj-header>
        <dj-main>Main</dj-main>
        <dj-footer>Footer</dj-footer>
      </dj-container>
    </dj-container>
```
:::
</demo-block>
