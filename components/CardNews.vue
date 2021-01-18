<template>
  <div class="col mb-4">
    <div class="card h-100 shadow-sm">
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="`https://www.youtube.com/embed/` + activity.video"
        allowfullscreen
      ></b-embed>
      <div class="card-body">
        <h5 class="card-title">{{ activity.title }}</h5>
        <small class="text-muted">Last updated 3 mins ago</small>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="card-text" v-html="activity.description">
          <!-- {{ activity.description }} -->
        </p>
        <nuxt-link
          :to="{ name: 'blogs-id', params: { id: activity._id } }"
          class="stretched-link"
        ></nuxt-link>
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
</style>
