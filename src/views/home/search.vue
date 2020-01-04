<template>
  <div>
      <my-header :backIsDisplay="true" :addIsDisplay="true"></my-header>
       <!-- <my-header></my-header> -->
      <router-view></router-view>
      <my-footer></my-footer>
    搜索
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created(){

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
