<template>
  <div id="home-wrapper">
    <span>123</span>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      dataImage: [
        {
          imgUrl: require('../../assets/images/bgtop.jpg')
        },
        {
          imgUrl: require('../../assets/images/bgtop2.jpg')
        },
        {
          imgUrl: require('../../assets/images/bgtop3.jpg')
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        lazy: {
          loadPrevNext: true
        },
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  beforeMount () {},
  swiper () {
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    return this.$refs.swiperBox.swiper
  },
  methods: {
    stopSwiper () {
      this.swiper.autoplay.stop()
    },
    startSwiper () {
      this.swiper.autoplay.start()
    }
  }
}
</script>
<style scoped lang="stylus" src="./style.styl"></style>
