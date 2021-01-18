<template>
  <div class="col mb-4">
    <div class="card h-100 shadow-sm">
      <b-embed
        :src="`https://www.youtube.com/embed/` + video.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></b-embed>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    video: Object,
  },
}
</script>

<style scoped>
.card {
  border-radius: 5px;
  border: none;
}
.card:hover {
  transform: scale(1.025);
}
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
