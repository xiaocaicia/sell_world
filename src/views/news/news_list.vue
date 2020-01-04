<template>
  <div>
    <my-header :backIsDisplay="true"></my-header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <div class="list" v-for="item in this.list" :key="item.index" @click="skipNewsDetails(item.id)">
        <div class="imgs">
          <img :src="item.img_url" alt />
        </div>
        <div class="title">
          <p>{{ item.title }}</p>
          <ul>
            <li>
              <span>发表时间:</span>
              <span v-for="item1 in date" :key="item1.index">
                <span v-if="item.id == item1.id">{{ item1.da }}</span>
              </span>
            </li>
            <li>
              <span>点击:</span>
              <span>{{ item.click }}</span>
            </li>
          </ul>
        </div>
      </div>
    </van-pull-refresh>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isLoading: false,
      id: '',
      date: []
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    async getlist() {
      var { data: res } = await this.$http.get('/api/getnewslist')
      if (res.status !== 0) {
        return this.$message.error('数据获取请求出错')
      }
      this.list = res.message
      this.list.forEach((item, ind) => {
        var a = {
          id: this.list[ind].id,
          da: item.add_time.split('T')[0]
        }
        this.date[ind] = a
      })
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    skipNewsDetails(key) {
      this.$router.push(`/news/details/${key}`)
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  margin: auto;
  width: 94%;
  height: 55px;
  padding: 10px 5px;
  border-bottom: solid 1px #ccc;
  display: flex;
  .imgs {
    margin-left: 15px;
    display: inline-block;
    height: 55px;
    width: 55px;
    vertical-align: top;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    flex: 1;
    margin-left: 8px;
    height: 50px;
    display: inline-block;
    p {
      height: 17px;
      font-size: 14px;
      font-weight: 700;
      color: #000;
      max-height: 32px;
      line-height: 16px;
    }
    ul {
      margin-top: 2px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 12px;
      color: #226aff;
      li {
        line-height: 30px;
      }
    }
  }
}
</style>
