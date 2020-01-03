<template>
  <div>
     <my-header :backIsDisplay="true"></my-header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell @click="Skip(item.id)" v-for="item in goodsList" :key="item.id">
          <div class="img-box"><img v-lazy="item.img_url" alt="" /></div>
          <p class="text-box">
            {{ item.title }}
          </p>
          <div class="footer-box">
            <div class="footer-box_top">
              <span class="sell_price">￥{{ item.sell_price }}</span>
              <s class="market_price">￥{{ item.market_price }}</s>
            </div>
            <div class="footer-box-bottom">
              <span class="hoting">热卖中</span>
              <span class="stock-quantity">剩{{ item.stock_quantity }}件</span>
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      pageNum: 0,
      loading: false,
      finished: false,
      isLoading: false
    }
  },
  created() {},
  methods: {
    async getgoodList() {
      const { data: res } = await this.$http.get(`/api/getgoods?pageindex=${this.pageNum}`)

      this.goodsList.push(...res.message)
      /*  console.log(this.goodsList) */

      if (res.message.length === 0) {
        this.finished = true
      }
      this.loading = false
    },

    onLoad() {
      /* console.log(1) */
      this.pageNum++
      this.getgoodList()
    },
    onRefresh() {
      setTimeout(() => {
        this.pageNum = 0
        this.goodsList = []
        this.onLoad()

        this.isLoading = false
      }, 1000)
    },
    Skip(id) {
      /*  const url=window.location.href.split('/')
      const id = url.split() */
      this.$router.push(`/goods/details/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.van-list {
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 5px 10px;
}
.van-cell {
  width: 48%;
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 0;
  -ms-flex-line-pack: justify;
  align-content: space-between;
}
.img-box {
  padding: 10px;
  min-height: 180px;
  position: relative;
  display: inline-block;
  text-align: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.text-box {
  font-size: 14px;
  color: #000;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
  padding: 4px 10px;
  height: 49px;
}
.footer-box {
  width: 100%;
  background: #eee;
  padding: 5px 0;
  .footer-box_top {
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    padding: 0 10px;
  }
}
.sell_price {
  font-size: 16px;
  color: red;
  margin-right: 15px;
}
.market_price {
  font-size: 14px;
  line-height: 24px;
}
.footer-box-bottom {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 10px;
}
</style>
