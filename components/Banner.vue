<template>
  <div v-if="banners.length" id="banner">
    <!-- Carousel -->
    <div class="555555555"></div>
    <div v-if="banners.length > 0">
      <client-only>
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
  },
  methods: {
    async getBanner() {
      await this.$axios
        .$get('/api/banner', {
          status: true,
        })
        .then((res) => {
          // console.log('zz', res.data)
          this.banners = res.data
          // console.log('logBanner', this.banners)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // this.banners = data
    },
  },
}
</script>

<style></style>
