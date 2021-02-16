<template>
  <div id="news" class="mt-4">
    <div class="container my-5">
      <h1 class="pb-5">Unii News ข่าวสาร ยูนี่</h1>
      <div class="row">
        <div
          v-if="activitys[0]"
          class="zoom col-xs-3 col-sm-12 col-md-12 col-lg-12 col-xl-6"
        >
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="`https://www.youtube.com/embed/${activitys[0].video}`"
            allowfullscreen
          ></b-embed>
          <p class="pt-2">
            <!-- ตัวจริง เสียงจริง Unii Center Thailand.!!! ฟังชัดๆ จาก Unii Center
            Thailand ตัวแทนในระดับโซนและภูมิภาคของ Unii Recycle Online.!!! Unii
            เพื่อยกระดับผู้ประกอบการ นักธุรกิจรีไซเคิลทั่วไทย
            ไปสู่ระดับสากล...!!! -->
            {{ activitys[0].title }}
          </p>
          <p>December 29,2020</p>
          <nuxt-link
            :to="{ name: 'news-id', params: { id: activitys[0]._id } }"
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
            v-for="item in activitys.slice(1, 3)"
            :key="item.id"
            class="card mb-3 zoom"
            style="max-width: 540px"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="`https://img.youtube.com/vi/${item.video}/0.jpg`"
                  style="width: 100%; height: 100%"
                  alt=""
                />
                <!-- <b-embed
                  type="iframe"
                  aspect="16by9"
                  :src="`https://www.youtube.com/embed/${item.video}`"
                  allowfullscreen
                ></b-embed> -->
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ item.title }}
                  </h5>
                  <p class="card-text">
                    <small class="">October 14,2020</small>
                  </p>
                  <nuxt-link
                    :to="{ name: 'news-id', params: { id: item._id } }"
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
  mounted() {
    this.getActivity()
  },
  methods: {
    async getActivity() {
      await this.$axios
        .$get('/api/activitys')
        .then((res) => {
          // console.log('zz', res.data)
          this.activitys = res
          // console.log('logactivity', this.activitys)
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
