<template>
  <div id="header-wrapper">
    <div class="con-box">
      <div class="con-left" />
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          index="1"
          @click="$router.push({ name: 'index' })"
        >
          首页
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="$router.push({ name: 'home_page' })"
        >
          沸点
        </el-menu-item>
        <el-menu-item index="3">
          话题
        </el-menu-item>
        <el-menu-item index="4">
          小册
        </el-menu-item>
        <el-menu-item index="5">
          活动
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    ...mapGetters(['barIndex'])
  },
  created () {},
  mounted () {
    this.getIndex()
  },
  methods: {
    ...mapMutations({
      change_index: 'CHANGE_INDEX'
    }),
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.activeIndex = key
      // 每次切换导航栏，会把当前状态同步到vuex中
      this.change_index(this.activeIndex)
    },
    getIndex () {
      this.activeIndex = sessionStorage.getItem('barIndex') ? sessionStorage.getItem('barIndex') : '1'
    }
  }
}
</script>

<style scoped lang="stylus">
#header-wrapper
  width 100%
  height 60px
  /*border-bottom 1px solid #35495e*/
  box-shadow: 0 1px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  background white
  animation translateTab 1s
  @keyframes translateTab
  {
    0%   {transform: translate3d(0,-100%,0);}
    100% {transform: translate3d(0,0,0);}
  }
  .con-box
    max-width 960px
    height 60px
    margin 0 auto
    display flex
    justify-content flex-start
    align-items center
    .con-left
      width 98px
      height 100%
      background url("../assets/images/fantasy-5062585_1920.jpg") no-repeat
      background-size cover
      /*border-bottom solid 1px #e6e6e6;*/
    .el-menu-demo
      max-width 960px
      height 60px
      line-height 60px
      li
        height 60px
        line-height 60px
</style>
