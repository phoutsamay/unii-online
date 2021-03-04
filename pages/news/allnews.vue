<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3">
      <CardNews
        v-for="activity in activitys"
        :key="activity.id"
        :activity="activity"
      />
    </div>
  </div>
</template>

<script>
export default {
  loading: true,
  // async asyncData({ $axios }) {
  //   const activitys = await $axios.$get('https://api.unii.co.th/api/activitys')
  //   return { activitys }
  // },
  data() {
    return {
      activitys: [],
    }
  },
  mounted() {
    this.getActivity()
  },
  methods: {
    async getActivity() {
      await this.$axios
        .$get('/api/activitys?sortBy=createdAt&OrderBy=desc')
        .then((res) => {
          // console.log('zz', res.data)
          this.activitys = res.data
          // console.log('logActivity', this.activitys)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // this.activitys = data
    },
  },
}
</script>

<style></style>
