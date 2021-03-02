<template>
  <div id="blog" class="container mt-5">
    <div class="my-4">
      <h1>บทความดีๆจาก ยูนี่ ออนไลน์</h1>
    </div>
    <b-card-group deck>
      <b-card
        v-for="item in posts.slice(0, 3)"
        :key="item.id"
        :img-src="`https://api.unii.co.th/api/uploads/${item.image}`"
        img-alt="Image"
        img-top
        class="shadow-sm"
      >
        <small class="text-muted">Last updated 3 mins ago{{ item._id }}</small>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <b-card-text v-html="item.description"> </b-card-text>
        <nuxt-link
          :to="{ name: 'blogs-id', params: { id: item._id } }"
          target="_blank"
          class="stretched-link"
        ></nuxt-link>
      </b-card>
    </b-card-group>
    <div class="text-center mt-5">
      <NuxtLink to="/blogs/allblogs">
        <b-button size="lg" class="btn btn-purple" type="submit"
          >see more</b-button
        ></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
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
        .$get(`/api/post/${this.$route.params.id}`)
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

<style scoped>
h1 {
  color: #69197b;
  font-weight: 700;
}
.card {
  border-radius: 5px;
  border: none;
}
.card:hover {
  transform: scale(1.025);
}
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shadow-sm {
  box-shadow: 0 0.125rem 1.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>
