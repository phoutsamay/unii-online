<template>
  <div class="container">
    <no-ssr>
      <b-card class="my-5">
        <b-card-title>{{ activitys.data.title }}</b-card-title>
        <small class="text-muted">Last updated 3 mins ago</small>
        <b-card-body>
          <b-embed
            v-if="activitys.data.video"
            type="iframe"
            aspect="16by9"
            :src="`https://www.youtube.com/embed/${activitys.data.video}`"
            allowfullscreen
          ></b-embed
        ></b-card-body>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <b-card-text v-html="activitys.data.description"> </b-card-text>
      </b-card>
    </no-ssr>

    <!-- <div class="card">
      <h2>{{ activitys.title }}</h2>
      <p>3 กันยายน 2563 | ข่าวสารองค์กร</p>
      <b-embed
        v-if="activitys.video"
        type="iframe"
        aspect="16by9"
        :src="`https://www.youtube.com/embed/${activitys.video}`"
        allowfullscreen
      ></b-embed>
      <br />
      eslint-disable-next-line vue/no-v-html
      <p v-html="activitys.description">{{ activitys.description }}</p>
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
          <NuxtLink to="/" class="previous back-buttom"
            >&laquo; กลับสู่หน้าหลัก</NuxtLink
          >
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const activity = await $axios.$get(`/api/activity/${params.id}`)
    return { activity }
  },
  data() {
    return {
      activitys: [],
    }
  },
  // mounted() {
  //   this.getActivity()
  // },
  // methods: {
  //   async getActivity() {
  //     await this.$axios
  //       .$get(`/api/activity/${this.$route.params.id}`)
  //       .then((res) => {
  //         // eslint-disable-next-line no-console
  //         console.log(res.data)
  //         this.activitys = res.data
  //         // eslint-disable-next-line no-console
  //         console.log('logActivitys', this.activitys)
  //       })
  //       .catch((error) => {
  //         // eslint-disable-next-line no-console
  //         console.log(error)
  //       })
  //   },
  // },
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
