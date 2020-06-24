<template>
  <div id="container-wrapper">
    222444
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, error }) {
    // try {
    //   const aRes = {}
    //   const res = await $axios.$post('/registerModel/getRoutPath', aRes)
    //   console.log('555555', res)
    // } catch (e) {
    //   console.log('555555', e.status)
    //   // error({ statusCode: res.code, message: res.msg })
    // }
  }
}
</script>

<style lang="stylus">
#container-wrapper
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  background white
  height 100px
  margin-top 20px
  box-shadow: 0 1px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
</style>
