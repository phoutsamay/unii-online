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
  async asyncData({ $axios }) {
    const activitys = await $axios.$get('https://api.unii.co.th/api/activitys')
    return { activitys }
  },
  data() {
    return {
      activitys: [],
    }
  },
}
</script>

<style></style>
