<template>
  <div>
        <h1>按钮类型</h1>
        <dj-button iconPosition="left" type="warning">默认按钮</dj-button>
        <dj-button iconPosition="right" type="primary">默认按钮</dj-button>
        <dj-button iconPosition="right" type="danger">默认按钮</dj-button>
        <dj-button iconPosition="right" type="default">默认按钮</dj-button>
        <dj-button iconPosition="right" type="success">默认按钮</dj-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
      return {
        icon: 'sousuo'
      }
  },
  methods: {
    handleClick(){
      alert('11')
    }
  }
}
</script>

<style>

</style>