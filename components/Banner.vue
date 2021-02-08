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
  async mounted() {
    await this.getBanner()
  },
  methods: {
    async getBanner() {
      const data = await this.$axios.$get('/api/banners')
      console.log('Banner')
      this.banners = data
    },
  },
}
</script>

<style></style>
