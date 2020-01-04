<template>
  <div>
     <my-header :backIsDisplay="true"></my-header>
    <div id='img_d' v-for="(item, index) in goodsDescList" :key="index">
      <h3 class="title">{{ item.title }}</h3>
      <hr />
      <div v-html="html" class='pic'></div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsDescList: [],
      html: ''
    }
  },
  created() {
    this.goodsDesc()
  },
  methods: {
    async goodsDesc() {
      const url = window.location.href
      const key = url.substring(url.lastIndexOf('/') + 1).match(/[0-9]*$/)[0]
      const { data: res } = await this.$http.get(`/api/goods/getdesc/${key}`)
    //   console.log(res.message.content)
      this.goodsDescList = res.message
      this.html = res.message[0].content
      console.log(this.html)
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  color: #226aff;
  font-size: 16px;
  margin: 15px 0;
  text-align: center;
}
.pic{
   margin: 15px 0;
}
#img_d{
   padding: 0 5px;
}
</style>
