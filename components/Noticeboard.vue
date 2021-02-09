<template>
  <div>
    <div id="overley">
      <div class="container mt-5">
        <div
          v-for="(noticeboard, index) in noticeboards"
          :key="index"
          class="row"
        >
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 mt-5">
            <p v-html="noticeboard.description"></p>

            <a :href="noticeboard.linkbtn" target="_blank"
              ><b-button class="outline-purple mt-3"
                >สมัครอบรม คลิ๊ก!!!</b-button
              ></a
            >
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
            <img
              :src="`https://api.unii.co.th/api/uploads/${noticeboard.image}`"
              alt=""
              width="75%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.noticeboards = await fetch('/api/noticeboards').then((res) =>
      res.json()
    )
  },
  fetchOnServer: false,
  data() {
    return {
      noticeboards: [],
    }
  },
  // mounted() {
  //   this.getNoticeboards()
  // },
  // methods: {
  //   async getNoticeboards() {
  //     const data = await this.$axios.$get('/api/noticeboards')
  //     this.noticeboards = data
  //   },
  // },
}
</script>

<style scoped>
.btn-custom {
  background: #ffd700;
  color: #4a1e61;
}
p {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 0;
}
#noticeboard {
  background: transparent linear-gradient(180deg, #e62ae0 0%, #4a1e61 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
}
</style>
