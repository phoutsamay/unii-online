<template>
  <div v-if="banners.length" id="banner">
    <!-- Carousel -->
    <div v-if="banners.length > 0">
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
    async getBanner() {
      await this.$axios
        .$get('/api/banners')
        .then((res) => {
          console.log('zz', res.data)
          this.banners = res.data
          console.log('xx', this.banners)
        })
        .catch((error) => {
          console.log(error)
        })
      // this.banners = data
    },
  },
}
</script>

<style></style>
