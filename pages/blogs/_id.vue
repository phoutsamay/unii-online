<template>
  <div class="container">
    <!-- <b-card class="my-5">
      <b-card-title>{{ activitys.title }}</b-card-title>
      <small class="text-muted">Last updated 3 mins ago</small>
      <b-card-body>
        <b-embed
          v-if="activitys.video"
          type="iframe"
          aspect="16by9"
          :src="`https://www.youtube.com/embed/${activitys.video}`"
          allowfullscreen
        ></b-embed
      ></b-card-body>

      <b-card-text v-html="activitys.description"> </b-card-text>
    </b-card> -->

    <!-- <div class="card">
      <h2>{{ activitys.title }}</h2>
      <p>3 กันยายน 2563 | ข่าวสารองค์กร</p>
      <b-embed
        v-if="activitys.video"
        type="iframe"
        aspect="16by9"
        :src="`https://www.youtube.com/embed/${activitys.video}`"
        allowfullscreen
      ></b-embed>
      <br />
      eslint-disable-next-line vue/no-v-html
      <p v-html="activitys.description">{{ activitys.description }}</p>
    </div> -->
    <div class="row">
      <div class="leftcolumn mx-auto">
        <div class="card px-4 py-4 my-4">
          <h2>{{ posts.title }}</h2>
          <img
            :src="`${$axios.defaults.baseURL}/api/uploads/${posts.image}`"
            width="100%"
          />
          <p v-html="posts.description"></p>
        </div>
        <!-- <div v-for="item in posts" :key="item.id" class="card">
          <h2>
            {{ item.title }}
          </h2>
          <p>3 กันยายน 2563 | ข่าวสารองค์กร</p>
          <div>
            <img src="../../assets/imgs/b1.jpg" alt="" width="100%" />
          </div>
          <br />

          <p v-html="post.description">
            {{ item.description }}
          </p>
        </div> -->

        <div class="my-3">
          <nuxt-link to="/" class="previous back-buttom"
            >&laquo; กลับสู่หน้าหลัก</nuxt-link
          >
        </div>
      </div>
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
          console.log(res.data)
          this.posts = res.data
          console.log('logPosts', this.posts)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>

<style></style>
