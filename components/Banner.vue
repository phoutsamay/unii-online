<template>
  <div id="banner">
    <!-- Carousel -->
    <div v-if="banners.length > 0">
      <client-only>
        <carousel :autoplay="true" :loop="true" :items="1" :nav="false">
          <img
            v-for="item in banners"
            :key="item.id"
            :src="`https://api.unii.co.th/api/uploads/${item.image}`"
            width="100%"
          />
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [],
    }
  },
  mounted() {
    this.getBanner()
    console.log('bannerlog', this.banners)
  },
  methods: {
    getBanner() {
      this.$axios.get('/api/banners').then((res) => {
        console.log('reslog', res.data)
        this.banners = res.data
      })

      // const data = await this.$axios.$get('/api/banners')
      // console.log('Banner')
      // this.banners = data
    },
  },
}
</script>

<style></style>
