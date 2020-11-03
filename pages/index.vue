<template>
  <div>
    <section id="carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="../assets/imgs/banner.jpg"
        ></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="../assets/imgs/banner-1.jpg"
        ></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="../assets/imgs/banner-2.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </section>

    <section id="video">
      <div class="container text-center">
        <h1>ทำความรู้จักกับ ยูนี่ ออนไลน์</h1>
        <p>
          Disrupt ต้นทุนธุรกิจรีไซเคิล ครั้งยิ่งใหญ่
          ครั้งแรกของประเทศไทยคืนทุนไว ได้กำไรแน่นอน
        </p>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/eU1uoF14ve0"
          allowfullscreen
        ></b-embed>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style></style>
