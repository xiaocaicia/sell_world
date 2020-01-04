<template>
  <div>
    <div class="comment">
      <h3>发表评论</h3>
      <hr />
      <div class="form-group">
        <!-- <label>内容</label> -->
        <van-cell-group>
          <van-field  border v-model="message" rows="2" autosize label="评论" type="textarea" maxlength="50" placeholder="请输入评论" show-word-limit ref="comform" />
        </van-cell-group>
      </div>
      <div class="buttons">
        <van-button type="info" @click="subCommit">发表评论</van-button>
      </div>
      <div class="publish">
        <!--加载更多-->
        <ul v-for="(item, index) in commitList" :key="item.id">
          <li class="user">
            <span>第{{ index }}楼</span>
            <span>用户：{{ item.user_name }}</span>
            <span>发表时间：{{ item.add_time | dateFormat('yyyy-MM-dd') }}</span>
          </li>
          <li class="content">
            <p>{{ item.content }}</p>
          </li>
        </ul>
        <van-button class="footbtn" @click="addsub">加载更多</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { List, Cell, Toast } from 'vant'

Vue.use(List)
Vue.use(Cell)
export default {
  data() {
    return {
      message: '',
      commitList: [],
      artid: 37,
      pageindex: 1,
      addCommit: {
        content: ''
      },
      error: false,
      loading: false,
      finished: false,
      //   截取后的list长度
      messagelist: [],
      //   截取长度
      sublength: 5,
      //   总共list的条数
      maxlist: []
    }
  },
  created() {
    this.getId()
    this.getCommit()
  },
  methods: {
    // 获取id
    getId() {
      const id = window.localStorage.getItem('id')
      this.artid = id
    },
    // 获取评论
    async getCommit() {
      const { data: res } = await this.$http.get(`/api/getcomments/${this.artid}`, {
        params: {
          pageindex: this.pageindex
        }
      })
      console.log(res)
      this.maxlist = res.message
      // console.log(this.commitList)
      if (res.message.length > 5) {
        var message = res.message.slice(0, this.sublength)
      }
      this.commitList = message
    },
    // 发表评论
    async subCommit() {
      var params = new URLSearchParams()
      params.append('content', this.$refs.comform.value)
      const { data: res } = await this.$http.post(`/api/postcomment/${this.artid}`, params)
      console.log(res)
      if (res.status !== 0) {
        return Toast.fail('评论失败')
      } else {
        Toast.success('评论成功')
        this.getCommit()
        this.message = ''
      }
    },
    // 点击加载更多
    addsub() {
      if (this.messagelist < this.maxlist) {
        this.sublength = this.sublength + 5
        this.getCommit()
      } else {
        return Toast.fail('没有更多评论了')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comment {
  margin: 0 5px;
}
.comment h3 {
  margin: 15px 0px;
}
.form-group {
  margin: 15px 0;
}
.form-control {
  width: 100%;
  height: 100px;
}
.van-button {
  width: 100%;
}
span {
  margin: 0 5px;
}
.content p {
  margin: 0 15px;
}
.user {
  background-color: #ccc;
}
.publish ul li {
  margin: 3px 0;
}
.footbtn {
  margin-top: 20px;
  margin-bottom: 50px;
  border: 1px solid red;
  color: red;
}

</style>
