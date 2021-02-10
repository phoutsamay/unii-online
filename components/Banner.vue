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
import axios from 'axios'
export default {
  data() {
    return {
      banners: [],
    }
  },
  // created() {
  //   this.$axios.get('/api/banners').then((res) => {
  //     this.banners = res.data
  //   })
  // },
  mounted() {
    this.getBanner()
  },
  methods: {
    getBanner() {
      axios.get('/api/banners').then((res) => (this.banners = res.data))
      console.log('banner', this.banners)
    },
  },
}
</script>

<style></style>
