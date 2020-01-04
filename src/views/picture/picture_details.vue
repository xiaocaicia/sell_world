<template>
  <div>
     <my-header :backIsDisplay="true"></my-header>
    <!-- 图片详情 -->
    <div v-for="itemLis in textLists" :key="itemLis.id">
      <h2 class="title">{{ itemLis.title }}</h2>
      <div class="father">
        <span>发表时间: {{ itemLis.add_time | dateFormat('yyyy-MM-dd') }}</span>
        <span>点击: {{ itemLis.click }}</span>
      </div>
      <hr />
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(item, index) in imgList" :key="index" @click="Preview_img(index)" >
            <lazy-component>
              <van-image :src="item.src"  v-lazy="item.src"/>
          </lazy-component>
        </van-grid-item>
      
      </van-grid>
      <p class="content" v-html='itemLis.content'></p>
    </div>
    <publish_pl></publish_pl>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'

Vue.use(ImagePreview)

export default {
  data() {
    return {
      imgList: [],
      textLists: []
    }
  },
  created() {
    this.getDetailList()
  },
  methods: {
    async getDetailList() {
      // 获取地址栏对应的图片详情id
      const url = window.location.href
      const key = url.substring(url.lastIndexOf('/') + 1).match(/[0-9]*$/)[0]
      // console.log(key)
      const { data: res } = await this.$http.get(`/api/getthumimages/${key}`)
      console.log(res)
      if (res.status !== 0) {
        return alert('获取失败')
      }
      this.imgList = res.message
      const { data: Lis } = await this.$http.get(`/api/getimageInfo/${key}`)
      // console.log(Lis)
      if (res.status !== 0) {
        return alert('获取失败')
      }
      this.textLists = Lis.message
    },
    Preview_img(idx) {
      // console.log(this.imgList)
      var newArr = []
      for (var i = 0; i < this.imgList.length; i++) {
        newArr.push(this.imgList[i].src)
      }
      // console.log(newArr)
      ImagePreview({
        images: newArr,
        showIndicators: true,
        startPosition:idx
      })
    }
  }
}
</script>

<style lang="less" scoped>
.van-grid {
  margin: 10px;
}
.title {
  color: #26a2ff;
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
}
.father {
  display: flex;
  justify-content: space-between;
  color: #8f8f94;
  font-size: 14px;
  span {
    margin: 0px 5px 15px;
  }
}
.van-image {
  box-shadow: 0 0 5px 3px #ccc;
}
.content {
  margin: 0 8px;
  text-indent: 2em;
  font-size: 16px
}
</style>
