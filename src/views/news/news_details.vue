<template>
  <div id="app">
    <my-header :backIsDisplay="true"></my-header>
    <div class="newsDetails">
      <!-- 标题 -->
      <div class="flex">
        <div class="top">
          <b>{{ this.list.title }}</b>
        </div>
        <ul>
          <li>
            <span>发表时间：</span><span>{{ this.date }}</span>
          </li>
          <li>
            <span>点击次数：</span><span>{{ this.list.click }}</span>
          </li>
        </ul>
      </div>
      <!-- 文章主体 -->
      <div class="main" v-html="html"></div>
    </div>
    <!-- 评论及发表 -->
    <publish_pl></publish_pl>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {},
      html: '',
      date: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const url = window.location.href
      const key = url.substring(url.lastIndexOf('/') + 1).match(/[0-9]*$/)[0]
      const id = key - 0
      const { data: res } = await this.$http.get(`/api/getnew/${id}`)
      if (res.status !== 0) {
        return this.$message.error('获取数据出错')
      }
      this.list = res.message[0]
      this.html = this.list.content
      this.date = this.list.add_time.split('T')[0]
      window.localStorage.setItem('id', id)
    }
  }
}
</script>

<style lang="less" scoped>
// 标题

.flex {
  height: 70px;
  width: 96%;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #1989fa;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

// 文章主体
.main {
  margin: 0 auto;
  width: 96%;
  margin-top: 20px;
}
</style>
