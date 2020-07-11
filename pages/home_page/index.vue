<template>
  <div id="home-wrapper">
    <span>123</span>
  </div>
</template>
<script>
export default {
  components: {},
  async asyncData ({ $axios }) {
    const aRes = {}
    const res = await $axios.$post('/registerModel/getRoutPath', aRes)
    console.log('报错', res)
    // try {
    //   const aRes = {}
    //   const res = await $axios.$post('/registerModel/getRoutPath', aRes)
    //   console.log('报错', res)
    // } catch (e) {
    //   console.log('eee', e.config)
    // }
  },
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
  methods: {}
}
</script>
<style scoped lang="stylus" src="./style.styl"></style>
