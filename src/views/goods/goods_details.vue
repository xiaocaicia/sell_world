<template>
  <div class="contain">
    <my-header :backIsDisplay="true"></my-header>
    <van-swipe :autoplay="3000" :height="60">
      <van-swipe-item v-for="(image, index) in imgList" :key="index">
        <img style="width:200px;height:200px; display:block ;margin:auto;" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="mid-con">
      <div class="mid_con-title">{{ goodsList.title }}</div>
      <p class="mid_con_p">
        市场价：<s class="mid_con_market">￥{{ goodsList.market_price }}</s> 销售价 <em>￥{{ goodsList.sell_price }}</em>
      </p>
      <div class="mid_con_count">
        <span> 购买数量</span>
        <van-stepper v-model="Sum" />
      </div>
      <div class="btn">
        <van-button type="info">立即购买</van-button>
        <van-button @click="joinCar" type="danger">加入购物车</van-button>
      </div>
    </div>
    <div class="params">
      <div class="goods-params">商品参数</div>
      <div class="params-body">
        <p class="goods_no">商品货号：{{ goodsList.goods_no }}</p>
        <p class="goods_no">库存情况：{{ goodsList.stock_quantity }}件</p>
        <p class="goods_no">上架时间：{{ goodsList.add_time | dateFormat }}</p>
      </div>
      <div class="btn_footer">
        <van-button class="btn_footer_o" plain type="info" @click='goodsDesc'>图文介绍</van-button>
        <van-button class="btn_footer_t" plain type="danger">商品评论</van-button>
      </div>
    </div>
   
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      imgList: [],
      goodsList: [],
      Sum: 0,
      loca: []
    }
  },
  computed: {
    ...mapState(['count'])
  },
  created() {
    this.getlsit()
  },
  methods: {
    async getlsit() {
      const url = window.location.href
      const key = url.substring(url.lastIndexOf('/') + 1).match(/[0-9]*$/)[0]
      const { data: res } = await this.$http.get(`/api/getthumimages/${key}`)
      this.imgList = res.message

      const { data: doc } = await this.$http.get(`/api/goods/getinfo/${key}`)
      /* console.log(doc) */

      this.goodsList = doc.message[0]
      /* console.log(this.goodsList) */
    },
    joinCar() {
      this.$toast({
        message: '添加成功',
        icon: 'success'
      })
      this.$store.commit('addN', this.Sum)
      const obj = {
        id: this.goodsList.id,
        count: this.Sum,
        price: this.goodsList.sell_price,
        selected: true
      }
      /*  console.log(obj) */
      const arr = JSON.parse(window.localStorage.getItem('car'))
      if (arr === null) {
        this.loca.push(obj)
        window.localStorage.setItem('car', JSON.stringify(this.loca))
        return false
      }
      const ind = arr.findIndex(item => item.id === obj.id)
      if (ind !== -1) {
        arr[ind].count += obj.count
      } else {
        arr.push(obj)
      }
      window.localStorage.setItem('car', JSON.stringify(arr))
    },
    goodsDesc(){
      this.$router.push(`/goods/goodsdesc/${this.goodsList.id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  padding: 10px;
}
.van-swipe {
  height: 230px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.mid-con {
  margin-top: 10px;
  padding: 15px;
  border-radius: 3px;
  border: 1px solid #ccc;
  .mid_con-title {
    border-bottom: 1px solid #ccc;
    font-size: 16px;
  }
  .mid_con_p {
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 10px;
    color: #8f8f94;
    .mid_con_market {
      text-decoration: line-through;
      margin: 0 10px;
      font-size: 14px;
      color: #8f8f94;
    }
    em {
      font-weight: 700;
      font-size: 16px;
      color: red;
      font-style: normal;
    }
  }
}
.mid_con_count {
  padding: 10px;
  span {
    font-size: 14px;
    color: #8f8f94;
  }
  .van-stepper {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    font-size: 0;
  }
}
.btn {
  .van-button {
    margin: 3px 3px;
    height: 33px;
    line-height: 33px;
    padding: 0 15px;
    font-size: 14px;
  }
}
.params {
  margin-top: 10px;
  padding: 15px;
  border-radius: 3px;
  border: 1px solid #ccc;
  .goods-params {
    font-size: 17px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  .params-body {
    border-bottom: 1px solid #ccc;
    padding: 15px;
  }
  .goods_no {
    font-size: 14px;
    margin: 10px 0;
    color: #8f8f94;
  }
}
.btn_footer {
  margin-top: 10px;
  .btn_footer_o {
    width: 100%;
    height: 39px;
    line-height: 39px;
    border-radius: 5px;
    margin: 5px 0;
    color: #1989fa;
    background-color: #fff;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding: 0;
    font-size: 16px;
  }
  .btn_footer_t {
    width: 100%;
    height: 39px;
    line-height: 39px;
    border-radius: 5px;
    margin: 5px 0;
    color: red;
    background-color: #fff;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding: 0;
    font-size: 16px;
  }
}
</style>
