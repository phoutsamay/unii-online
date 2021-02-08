<template>
  <div id="video">
    <div class="container pt-5">
      <div class="text-center">
        <h1>ทำความรู้จักกับ ยูนี่ ออนไลน์</h1>
        <p>
          Disrupt ต้นทุนธุรกิจรีไซเคิล ครั้งยิ่งใหญ่
          ครั้งแรกของประเทศไทยคืนทุนไว ได้กำไรแน่นอน
        </p>
      </div>
      <div>
        <b-embed
          src="https://www.youtube.com/embed/CMQOxxgvgi8?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></b-embed>
      </div>

      <div class="mt-3">
        <div v-if="videos">
          <client-only>
            <carousel
              class="sectioncarousel"
              :autoplay="true"
              :loop="true"
              :margin="20"
              :video="true"
              :lazyLoad="true"
              :nav="false"
              :autoplayHoverPause="true"
              :responsive="{
                0: { items: 1, nav: false },
                600: { items: 3, nav: false },
              }"
            >
              <div v-for="(video, index) in videos" :key="index" :video="video">
                <img
                  :src="`https://img.youtube.com/vi/` + video.title + `/0.jpg`"
                  style="width: 100%; height: 200px"
                  alt=""
                />
              </div>
            </carousel>
          </client-only>
        </div>
        <div class="text-center">
          <NuxtLink to="/videos/allvideos">
            <b-button size="lg" class="btn btn-purple" type="submit"
              >วีดีโอทั้งหมด</b-button
            ></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: null,
    }
  },
  async mounted() {
    await this.getVideo()
  },
  methods: {
    async getVideo() {
      const data = await this.$axios.$get('/api/videos')
      this.videos = data
    },
  },
}
</script>

<style scoped>
h1 {
  color: #69197b;
  font-weight: 700;
}
</style>
