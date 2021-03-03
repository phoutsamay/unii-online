<template>
  <div class="container">
    <b-card class="my-5">
      <b-card-title>{{ post.data.title }}</b-card-title>
      <small class="text-muted">Last updated 3 mins ago</small>
      <b-card-body>
        <b-embed
          v-if="post.data.video"
          type="iframe"
          aspect="16by9"
          :src="`https://www.youtube.com/embed/${post.data.video}`"
          allowfullscreen
        ></b-embed
      ></b-card-body>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <b-card-text v-html="post.data.description"> </b-card-text>
    </b-card>
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
