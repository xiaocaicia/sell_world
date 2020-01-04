<template>
  <div v-show="dis">
    <van-tabbar v-model="active">
      <van-tabbar-item @click="handelHome">
        <span class="iconfont">&#xe626;</span>
        <p>首页</p>
      </van-tabbar-item>
      <van-tabbar-item @click="handelVip">
        <span class="iconfont">&#xeb8a;</span>
        <p>会员</p>
      </van-tabbar-item>
      <van-tabbar-item @click="handeCar">
        <van-icon name="cart-o" :info="count" size="25" />
        <p>购物车</p>
      </van-tabbar-item>
      <van-tabbar-item icon="search" size="25" @click="handelSearch">
        <p>搜索</p>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: 0,
      sum: 0,
      dis: true
    }
  },
  created() {
    let arr = JSON.parse(window.localStorage.getItem('car'))
    if (arr === null) {
      return false
    }
    arr.forEach(item => {
      this.sum += item.count
    })
    this.$store.state.count = this.sum
    this.tailHidden()
  },

  methods: {
    // 跳转主页面
    handelHome() {
      this.$router.push('/home1')
    },
    // 跳转 vip
    handelVip() {
      this.$router.push('/member')
    },
    // 跳转购物车
    handeCar() {
      this.$router.push('/goods/shopcar')
      // this.dis = 'display:block'
    },
    // 跳转查询页面
    handelSearch() {
      this.$router.push('/search')
    },
    tailHidden() {
      var url = '/goods/shopcar'
      if (this.$router.currentRoute.path === url) {
        this.dis = false
      }
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style lang="less" scoped>
p {
  font-size: 18px;
}
.van-tabbar-item {
  text-align: center;
}
.iconfont {
  font-size: 25px;
}
.van-tabbar {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
}
</style>
