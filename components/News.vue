<template>
  <div id="news">
    <div class="container my-5">
      <h1 class="pb-5">Unii News ข่าวสาร ยูนี่</h1>
      <div
        v-for="(activity, index) in [activitys[0]]"
        :key="index"
        :activity="activity"
        class="row"
      >
        <div class="zoom col-xs-3 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="`https://www.youtube.com/embed/` + activity.video"
            allowfullscreen
          ></b-embed>
          <p class="pt-2">
            {{ activity.title }}
          </p>
          <p>December 29,2020</p>
          <nuxt-link
            :to="{ name: 'news-id', params: { id: activity._id } }"
            target="_blank"
            class="stretched-link"
          ></nuxt-link>
        </div>
        <div
          class="col-xs-3 col-sm-12 col-md-12 col-lg-12 col-xl-6"
          style="margin-top: -20px"
        >
          <hr class="vl d-none d-xl-block" />

          <div
            v-for="(activity, index) in [activitys[1], activitys[2]]"
            :key="index"
            :activity="activity"
            class="card mb-3 zoom"
            style="max-width: 540px"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  :src="`https://www.youtube.com/embed/` + activity.video"
                  allowfullscreen
                ></b-embed>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ activity.title }}
                  </h5>
                  <p class="card-text">
                    <small class="">October 14,2020</small>
                  </p>
                  <nuxt-link
                    :to="{ name: 'news-id', params: { id: activity._id } }"
                    target="_blank"
                    class="stretched-link"
                  ></nuxt-link>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div class="text-center">
            <NuxtLink to="/news/allnews">
              <b-button size="lg" class="btn btn-purple" type="submit"
                >ดูทั้งหมด</b-button
              ></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activitys: [],
    }
  },
  async mounted() {
    await this.getActivitys()
  },
  methods: {
    async getActivitys() {
      const data = await this.$axios.$get('/api/activitys')
      this.activitys = data
    },
  },
}
</script>

<style scoped>
#news {
  background: linear-gradient(180deg, #e62ae0 0%, #4a1e61 100%);
}
h1 {
  color: #ffffff;
}
h5 {
  color: #ffffff;
}
p {
  color: #ffffff;
}
.card {
  background-color: rgba(245, 245, 245, 0);
  border: none;
}
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
