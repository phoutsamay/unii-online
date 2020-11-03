<template>
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
      <b-carousel-slide img-src="../assets/imgs/banner.jpg"></b-carousel-slide>

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
