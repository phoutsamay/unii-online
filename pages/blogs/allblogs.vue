<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get('https://api.unii.co.th/api/posts')
    return { posts }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style></style>
