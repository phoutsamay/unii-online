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
              :src="`/api/uploads/${item.image}`"
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
    console.log('partnerlog', this.partners)
  },
  methods: {
    getPartner() {
      this.$axios.get('/api/partners').then((res) => {
        console.log('partnerlog', res.data)
        this.partners = res.data
      })

      // const data = await this.$axios.$get('/api/partners')
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
