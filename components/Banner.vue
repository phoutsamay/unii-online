<template>
  <div v-if="banners.length" id="banner">
    <!-- Carousel -->
    <div class="555555555"></div>
    <div v-if="banners.length > 0">
      <no-ssr>
        <carousel :autoplay="true" :loop="true" :items="1" :nav="false">
          <div v-for="item in banners" :key="item.id">
            <div>
              <img
                :src="`${$axios.defaults.baseURL}/api/uploads/${item.image}`"
                width="100%"
              />
            </div>
          </div>
        </carousel>
      </no-ssr>
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
