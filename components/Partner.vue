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
  async fetch() {
    this.partners = await fetch('/api/partners').then((res) => res.json())
  },
  fetchOnServer: true,
  data() {
    return {
      partners: [],
    }
  },
  // mounted() {
  //   this.getPartner()
  // },
  // methods: {
  //   async getPartner() {
  //     const data = await this.$axios.$get('/api/partners')
  //     this.partners = data
  //   },
  // },
}
</script>

<style scoped>
h5 {
  color: #69197b;
  font-weight: 700;
}
</style>
