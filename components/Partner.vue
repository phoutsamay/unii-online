<template>
  <div id="partner">
    <div class="container my-5">
      <div class="text-center">
        <h5>ส่งสินค้ากลับสู่ผู้ผลิตทุกราย</h5>
      </div>
      <div v-if="partners.length > 0">
        <client-only>
          <carousel
            :autoplay="true"
            :loop="true"
            :items="4"
            :nav="false"
            :dots="false"
          >
            <img
              v-for="item in partners"
              :key="item.id"
              :src="`${$axios.defaults.baseURL}/api/uploads/${item.image}`"
            />
          </carousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [],
    }
  },
  mounted() {
    this.getPartner()
  },
  methods: {
    async getPartner() {
      await this.$axios
        .$get('/api/partners')
        .then((res) => {
          // console.log('zz', res.data)
          this.partners = res.data
          // console.log('logPartner', this.partners)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // this.partners = data
    },
  },
}
</script>

<style scoped>
h5 {
  color: #69197b;
  font-weight: 700;
}
</style>
