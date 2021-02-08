<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3">
      <CardVideo v-for="video in videos" :key="video.id" :video="video" />
    </div>
  </div>
</template>

<script>
export default {
  loading: true,
  // async asyncData({ $axios }) {
  //   const videos = await $axios.$get('https://api.unii.co.th/api/videos')
  //   return { videos }
  // },
  data() {
    return {
      videos: [],
    }
  },
  mounted() {
    this.getVideo()
  },
  methods: {
    async getVideo() {
      const data = await this.$axios.$get('/api/videos')
      this.videos = data
    },
  },
}
</script>

<style></style>
