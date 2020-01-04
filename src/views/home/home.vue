<template>
  <div>
    <my-header></my-header>
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiper" :key="item.id"><img :src="item.img" alt="" style="height:200px"></van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-grid :column-num="3">
        <van-grid-item icon="http://destiny001.gitee.io/projecttraining/img/menu1.15200d52.png" text="新闻资讯" @click="news"/>
        <van-grid-item icon="http://destiny001.gitee.io/projecttraining/img/menu2.64e2fbce.png" text="图片分享" @click="photo"/>
        <van-grid-item icon="http://destiny001.gitee.io/projecttraining/img/menu3.a99e8466.png" text="商品购买" @click="goods"/>
        <van-grid-item icon="http://destiny001.gitee.io/projecttraining/img/menu4.64d2fcb9.png" text="留言反馈" />
        <van-grid-item icon="http://destiny001.gitee.io/projecttraining/img/menu5.28fc050c.png" text="视频专区" />
        <van-grid-item icon="http://destiny001.gitee.io/projecttraining/img/menu6.19ace747.png" text="联系我们" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: []
    }
  },
  created() {
    this.getSwipe()
  },
  methods: {
    async getSwipe() {
      const { data: res } = await this.$http.get('api/getlunbo')
      if (res.status !== 0) return this.$message.error(res.meta.msg)
      this.swiper = res.message
      console.log(res)
    },
    news(){
       this.$router.push({path: '/newslist'}
);
    },
    photo(){
       this.$router.push({path: '/photo/list'}
);
    },
    goods(){
       this.$router.push({path: '/goods/list'}
)
    }
  }
}
</script>

<style lang="less" scoped>
.swipe img {
  width: 100%;
  height: 100%;
  background-size: cover
}
.van-grid{
  display: flex;
  height:100px;
}
.van-grid-item{
   flex:1;
   font-size: 100px
}
</style>
