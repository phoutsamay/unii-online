<template>
  <!-- <div>
    <div class="container">
      <div>
        <h1>บทความจาก ยูนี่</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="item in posts" :key="item.id" class="card h-100 shadow-sm">
          <img
            :src="`https://api.unii.co.th/api/uploads/${item.image}`"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <small class="text-muted">Last updated 3 mins ago</small>

            <p class="card-text" v-html="item.description"></p>
            <b-button variant="primary">Primary</b-button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
    <b-card-group deck>
      <b-card
        v-for="item in posts"
        :key="item.id"
        :title="item.title"
        :img-src="`https://api.unii.co.th/api/uploads/${item.image}`"
        img-alt="Image"
        img-top
        class="shadow-sm"
      >
        <small class="text-muted">Last updated 3 mins ago</small>
        <b-card-text v-html="item.description"> </b-card-text>
      </b-card>
    </b-card-group>
    <div class="text-center">
      <button type="button" class="btn btn-custom">บทความทั้งหมด</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    async getPost() {
      const data = await this.$axios.$get('/api/posts')
      this.posts = data
    },
  },
}
</script>

<style scoped>
h1 {
  color: #69197b;
  font-weight: 700;
}
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
.shadow-sm {
  box-shadow: 0 0.125rem 1.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>
