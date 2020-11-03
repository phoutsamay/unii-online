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

    <section id="partner">
      <div class="container text-center">
        <h1>ส่งสินค้ากลับสู่ผู้ผลิตทุกราย</h1>
        <img src="../assets/imgs/partner.jpg" alt="" />
      </div>
    </section>

    <section id="overley">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <h1>สมัครอบรม Unii Mini Center #UMC</h1>
            <p>
              UNII Application Disrupt ต้นทุนธุรกิจรีไซเคิล ครั้งยิ่งใหญ่
              ครั้งแรกของประเทศไทยคืนทุนไว ได้กำไรแน่นอน สมัครด่วนเพียง 8,888
              บาท/ท่าน เฉพาะ 88 ท่าน เท่านั้นอบรมวันที่ 13 - 14 พฤศจิกายน 2562
              เวลา 8.30 - 17.00 น. อาคารพร้อมพันธุ์ 3 ลาดพร้าว ซอย 3
              (รับรองผลคืนเงิน 100% ถ้าไม่สามารถสร้างเงินได้)
            </p>
            <b-button
              size="sm"
              class="btn btn-purple my-2 my-sm-0"
              type="submit"
              >สมัครอบรม</b-button
            >
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 text-center mt-4">
            <img src="../assets/imgs/mockup-register.png" alt="" />
          </div>
        </div>
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
