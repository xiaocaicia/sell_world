<template>
  <div>
     <my-header :backIsDisplay="true"></my-header>
    <!-- tab栏 -->
    <van-tabs @click='onClick'>
      <van-tab v-for="tabitem in tabList" :title="tabitem.title" :key="tabitem.id">
        <div v-for="imgitem in imgList" :key="imgitem.id" class="fatherLis" @click='imgId(imgitem.id)'>
          <img :src="imgitem.img_url" alt="" class="imgLis" v-lazy="imgitem.img_url"/>
          <div class="sonLis">
            <p class='one'>{{ imgitem.title }}</p>
            <p class='two' v-html="imgitem.zhaiyao.substring(0,80)+'...'"></p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [],
      imgList: [],
      tabmodel: 0
    }
  },
  created() {
    this.getPictureList()
  },
  methods: {
    async getPictureList(id) {
      // console.log(0)
      const { data: res } = await this.$http.get('/api/getimgcategory')
      if (res.status !== 0) {
        return alert('获取失败')
      }
      // 添加一个全部的tab选项
      this.tabList = res.message
      this.tabList.unshift({ title: '全部', id: 0 })

      // 图片列表请求
      const { data: lis } = await this.$http.get(`/api/getimages/${this.tabList[0].id}`)
      // console.log(this.tabList)
      this.imgList = lis.message
    },
    // 点击Tab发送请求
   async onClick(name){
       // 图片列表请求
      const { data: lis } = await this.$http.get(`/api/getimages/${this.tabList[name].id}`)
      this.imgList = lis.message
      // console.log(this.imgList)
    },
   async imgId(key){
      // console.log(key)
      const {data:res} = await this.$http.get(`/api/getthumimages/${key}`)
      // console.log(res)
      if (res.status !== 0) {
        return alert('获取失败')
      }
      this.$router.push(`/photo/Info/${key}`)
      sessionStorage.setItem('id',key)
    }
  }
}
</script>

<style lang="less" scoped>
.van-tab {
  font-size: 12px;
}
.fatherLis {
  position: relative;
  margin: 5px 10px 10px 10px;
  height: 300px;
  .imgLis {
    width: 100%;
    border-radius: 8px;
    height: 100%;
  }
  .sonLis {
    position: absolute;
    bottom: 0px;
    height: 75px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 12px;
    padding: 5px 0 5px 8px;
    border-radius: 0 0 8px 8px;
    .one{
      font-size: 13px;
      margin-bottom: 3px
    }
    .two{
      text-indent: 2em;
    }
  }
}
</style>
