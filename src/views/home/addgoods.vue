<template>
  <div>
    <my-header :backIsDisplay="true"></my-header>
    <div class="addgods">
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入商品名称" />
      </van-cell-group>
      <hr />
      <div class="btn">
        <van-button type="info" size="large" @click="addbtn">添加商品</van-button>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
// import {Transition} from 'vant'
// Vue.use(Transition)
export default {
  data() {
    return {
      value: ''
    }
  },
  created() {},
  methods: {
    async addbtn() {
      // 判断用户输入的是否为空,
      if (this.value.trim().length === 0) {
        return this.$notify('请输入需要添加的信息')
      }
      console.log(this.value.trim())

      let params = new URLSearchParams()
      params.append('name', this.value.trim())
      console.log(params)

      //   发起post
      const { data: res } = await this.$http.post('api/addproduct/', params)
      console.log(res)

      if (res.status !== 0) {
        return this.$notify('添加失败')
      } else {
        return this.$notify('添加成功')

      }
    }
  }
}
</script>

<style lang="less" scoped>
.addgods {
  margin: 0 5px;
}
van-cell-group {
  bottom: 1px solid #ccc;
}
.btn {
  margin-top: 50px;
}
</style>
