<template>
  <div>
       <my-header :backIsDisplay="true"></my-header>
    <div class="kong" :style="this.dis">
      <div class="f">
        <div><img src="../../../public/images/snipaste20200103_140651.jpg" alt="" /></div>
        <p>购物车空空如也</p>
        <van-button type="info" @click="skipGoodsist">去逛逛</van-button>
      </div>
    </div>
    <van-submit-bar :price="price*100" button-text="提交订单" @submit="onSubmit" />
    <!-- 提交订单 -->

    <van-card :num ="localist[item.id]" v-for="item in goodsList" :key="item.id" :title="item.title" :desc="'￥' + item.sell_price" :thumb="item.thumb_path">
      <div slot="footer">
        <van-stepper v-model="localist[item.id]" @change="changeSum(item.id, localist[item.id])" />
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      dis: 'display:block',
      lid: '',
      goodsList: [],
      localist: {},
      locaid:{}
    }
  },
  created() {
    this.getgoodsList()
    this.getLoca()
    this.priceNum()
  },
  methods: {
    // 隐藏空白结构
    hideBlank() {},
    onSubmit() {},
    // 跳转商品列表
    skipGoodsist() {
      this.$router.push('/goods/list')
    },
    async getgoodsList() {
      const arr = JSON.parse(window.localStorage.getItem('car'))
      if (arr === null) return false
      this.dis = 'display:none'
      arr.forEach(item => {
        this.lid += ',' + item.id
      })
      let str2 = this.lid.slice(1)
      const { data: res } = await this.$http.get(`/api/goods/getshopcarlist/${str2}`)
      /* console.log(res) */
      this.goodsList = res.message
    },
    getLoca() {
      const arr = JSON.parse(window.localStorage.getItem('car'))
      if (arr === null) return false
      arr.forEach(item => {
        this.localist[item.id] = item.count
      })

      /* console.log(this.localist) */
    },
    changeSum(id, lid) {
      console.log(id, lid)
      const arr = JSON.parse(window.localStorage.getItem('car'))
      const ind = arr.findIndex(item => item.id === id)
      if (ind !== -1) {
        arr[ind].count = lid
      }
      window.localStorage.setItem('car', JSON.stringify(arr))
      this.priceNum()
    },
    priceNum() {
      const arr = JSON.parse(window.localStorage.getItem('car'))
      this.price = 0
      arr.forEach(item => {
        console.log(item.count, item.price)
        this.price += item.count * item.price
      })
    }
  }
}
</script>

<style lang="less" scoped>
.kong {
  width: 100%;
  position: relative;
  .f {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    div {
      width: 130px;
      height: 130px;
      margin: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      color: #cfcfcf;
      font-size: 19px;
      font-weight: 700px;
      text-align: center;
    }
    .van-button {
      margin: 15px;
      height: 30px;
      line-height: 30px;
      position: absolute;
      left: 41%;
      transform: translateX(-50%);
    }
  }
  .van-submit-bar {
    max-width: 540px;
  }
}
.footer-c {
  display: none;
}
.van-card {
  margin: 10px 0;
  position: relative;
  box-sizing: border-box;
  padding: 5px 15px;
  color: #323233;
  font-size: 12px;
  background-color: #fafafa;
  .van-stepper {
    text-align: right;
    font-size: 0;
  }
  .van-card__desc {
    color: red;
  }
}
</style>
