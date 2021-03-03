<template>
  <div class="container">
    <p>{{ post }}</p>
    <h1>{{ post.data.title }}</h1>
    <p>555</p>
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
