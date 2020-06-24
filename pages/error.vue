<template>
  <div class="container">
    {{ error }}
<!--    <h1 v-if="error.statusCode === 403">-->
<!--      {{ error.message }}-->
<!--    </h1>-->
<!--    <h1 v-if="error.statusCode === 404">-->
<!--      {{ error.message }}-->
<!--    </h1>-->
<!--    <h1 v-if="error.statusCode === 600">-->
<!--      {{ error.message }}-->
<!--    </h1>-->
    <nuxt-link to="/">
      Home page
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>
