<template>
  <div class="container">
    <no-ssr>
      <b-card class="my-5">
        <b-card-title>{{ post.data.title }}</b-card-title>
        <small class="text-muted">Last updated 3 mins ago</small>
        <b-card-body>
          <img
            :src="`${$axios.defaults.baseURL}/api/uploads/${post.data.image}`"
            width="100%"
          />
        </b-card-body>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <b-card-text v-html="post.data.description"> </b-card-text>
      </b-card>
    </no-ssr>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const post = await $axios.$get(`/api/post/${params.id}`)
    return { post }
  },
}
</script>

<style></style>
