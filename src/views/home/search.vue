<template>
  <div>
    <my-header :backIsDisplay="true" :addIsDisplay="true"></my-header>
    <form action="/">
      <van-search placeholder="请输入搜索关键词" v-model="value" show-action @search="search(value)" @cancel="callOff" />
    </form>
    <van-cell-group>
      <div id="box2">
        <div class="box" :class="List.length > 0 ? 'yc' : 'xs'">
          <van-panel title="历史搜索"><van-icon name="delete" @click="Delete"/></van-panel>
          <van-tag v-for="(item, index) in SearchHistory" :key="index.id">{{ item }}</van-tag>
          <van-divider :class="SearchHistory.length > 0 ? 'yc' : ''">暂无搜索历史</van-divider>
        </div>
        <van-swipe-cell v-for="(item, index) in List" :key="index.id">
          <van-cell :border="false" :title="item.name" :value="'商品发布时间:' + item.ctime.substring(0, 10)" />
          <template slot="right">
            <van-button square type="danger" text="删除" @click="remove(item.id)" />
          </template>
        </van-swipe-cell>
      </div>
    </van-cell-group>
    <my-footer></my-footer>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { async } from 'q'
export default {
  data() {
    return {
      value: '',
      List: [],
      SearchHistory: [],
      nam: '0'
    }
  },
  created() {},
  methods: {
    async search(value) {
      value = this.value
      if (value.trim().length !== 0) {
        const { data: res } = await this.$http.get(`api/getprodlist`)
        if (res.status !== 0) {
          return this.$notify('索取失败')
        }
        this.List = res.message
        // console.log(this.List.id)
        this.SearchHistory.splice(0, 0, value)
        this.SearchHistory = [...new Set(this.SearchHistory)]
      }
    },
    callOff() {
      this.List = ''
      // console.log(this.List)
    },
    Delete() {
      this.SearchHistory = ''
    },
    remove(id) {
      Dialog.confirm({
        title: '删除提示',
        message: '是否确定删除该商品？'
      })
        .then(async a => {
          // on confirm
          const {data:res} = await this.$http.get(`api/delproduct/${id}`)
          tihs.search()
          return this.$notify('删除成功')
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
.van-field__control {
  padding: 4px !important;
}
.van-panel {
  padding: 0 10px;
  display: flex;
  justify-content: center;
}
.van-panel__content {
  height: 100%;
  line-height: 44px;
  margin-right: 5%;
}
.van-icon-delete:before {
  font-size: 16px;
}
.van-tag--default {
  margin: 3%;
}
.yc {
  display: none !important;
}
.xs {
  display: block !important;
}
</style>
