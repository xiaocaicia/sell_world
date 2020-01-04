<template>
  <div>
      <div class="loadd">
           <van-loading size="24px"  type="spinner" vertical color="#646566">正在加班加点开发中，请敬请期待!</van-loading>
      </div>
     <my-footer></my-footer>
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
.loadd {
    margin-top: 30px;
}
.van-loading__text {
    color: #000;
    font-size: 18px;
}
</style>
