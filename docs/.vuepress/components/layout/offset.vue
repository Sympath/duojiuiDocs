<template>
  <div> <h3>offset控制元素间距，设置offset会空出元素右侧对应数量的空间</h3>
        <dj-row>
            <dj-col :span="8" > <div>8：33.33%</div></dj-col>
            <dj-col :span="8" > <div :offset="8">8：33.33%</div></dj-col>
        </dj-row></div>
</template>

<script>
export default {

}
</script>

<style>

</style>