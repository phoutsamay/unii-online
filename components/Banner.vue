<template>
  <div id="banner">
    <!-- Carousel -->
    <div v-if="banners">
      <client-only>
        <carousel :autoplay="true" :loop="true" :items="1" :nav="false">
          <img
            v-for="item in banners"
            :key="item.id"
            :src="`/api/uploads/${item.image}`"
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
      banners: null,
    }
  },
  mounted() {
    this.getBanner()
  },
  methods: {
    getBanner() {
      axios.get('/api/banners').then((res) => {
        console.log(res.data)
        this.banners = res.data
      })
    },
    // const data = axios.get('/api/banners')
    // this.banners = data
  },
}
</script>

<style></style>
