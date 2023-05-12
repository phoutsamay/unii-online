<template>
  <div class="col mb-4">
    <div class="card h-100 shadow-sm">

      <img style="width: 100%; height: 25%" alt="" class="image-style" :src="`${activity?.cover?.original}`" />
      <div class="card-body">
        <h5 class="card-title">{{ activity.title }}</h5>
        <small class="text-muted">{{ activity.content }}</small>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <NuxtLink :to="{ name: 'news-id', params: { id: activity.id } }" class="stretched-link" target="_blank">
        </NuxtLink>
        <!-- <a href="#" class="stretched-link"></a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    activity: Object,
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

.image-style {
  object-fit: cover;
}
</style>
