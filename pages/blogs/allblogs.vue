<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  loading: {
    continuous: true,
  },
  // async asyncData({ $axios }) {
  //   const posts = await $axios.$get('https://api.unii.co.th/api/posts')
  //   return { posts }
  // },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    async getPost() {
      await this.$axios
        .$get('/api/posts?sortBy=createdAt&OrderBy=desc')
        .then((res) => {
          // console.log('zz', res.data)
          this.posts = res.data
          // console.log('logPost', this.posts)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // this.posts = data
    },
  },
}
</script>

<style></style>
