<template>
  <div>
    <div class="container">
      <b-card class="my-5">
        <b-card-title>{{ posts.title }}</b-card-title>
        <small class="text-muted">Last updated 3 mins ago</small>
        <b-card-img
          v-if="posts.image"
          :src="`${$axios.defaults.baseURL}/api/uploads/${posts.image}`"
          alt="Image"
        ></b-card-img>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <b-card-text v-html="posts.description"> </b-card-text>
      </b-card>

      <!-- <div class="card">
        <h2>{{ posts.title }}</h2>
        <p>3 กันยายน 2563 | ข่าวสารองค์กร</p>
        <img
          v-if="posts.image"
          :src="`${$axios.defaults.baseURL}/api/uploads/${posts.image}`"
          alt=""
        />
        <br />
        eslint-disable-next-line vue/no-v-html
        <p v-html="posts.description"></p>
      </div> -->
      <!-- <div class="row">
      <div class="leftcolumn mx-auto">
        <div v-for="(post, index) in posts" :key="index" class="card">
          <h2>
            {{ post.title }}
          </h2>
          <p>3 กันยายน 2563 | ข่าวสารองค์กร</p>
          <div>
            <img src="../../assets/imgs/b1.jpg" alt="" width="100%" />
          </div>
          <br />
          eslint-disable-next-line vue/no-v-html
          <p v-html="post.description">
            {{ post.description }}
          </p>
        </div>

        <div class="my-3">
          <nuxt-link to="/" class="previous back-buttom"
            >&laquo; กลับสู่หน้าหลัก</nuxt-link
          >
        </div>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  loading: true,
  // async asyncData({ $axios, params }) {
  //   const posts = await $axios.$get(
  //     `https://api.unii.co.th/api/post/${params.id}`
  //   )
  //   return { posts }
  // },
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.getPost()
  },
  methods: {
    async getPost() {
      await this.$axios
        .$get(`/api/post/${this.$route.params.id}`)
        .then((res) => {
          console.log('zz', res.data)
          this.posts = res.data
          // console.log('logPost', this.posts)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // this.posts = data
    },
  },
}
</script>

<style scoped>
a {
  color: #212529;
  text-decoration: none;
}
a:hover {
  color: #69197b;
}
/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
  .back-buttom {
    padding-left: 20px;
  }
}
</style>
