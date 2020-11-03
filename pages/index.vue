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

    <section id="service">
      <div class="container">
        <div>
          <b-card-group deck>
            <div class="row">
              <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <b-card
                  title="Unii Recycle"
                  img-src="../assets/imgs/recycle-icon.png"
                  img-alt="Image"
                  img-top
                >
                  <b-card-text class="d-none d-md-block">
                    ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
                  </b-card-text>
                </b-card>
              </div>

              <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <b-card
                  title="Unii Truck"
                  img-src="../assets/imgs/recycle-icon.png"
                  img-alt="Image"
                  img-top
                >
                  <b-card-text class="d-none d-md-block">
                    ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
                  </b-card-text>
                </b-card>
              </div>

              <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <b-card
                  title="Unii Center"
                  img-src="../assets/imgs/recycle-icon.png"
                  img-alt="Image"
                  img-top
                >
                  <b-card-text class="d-none d-md-block">
                    ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
                  </b-card-text>
                </b-card>
              </div>

              <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                <b-card
                  title="Unii Truck"
                  img-src="../assets/imgs/recycle-icon.png"
                  img-alt="Image"
                  img-top
                >
                  <b-card-text class="d-none d-md-block">
                    ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
                  </b-card-text>
                </b-card>
              </div>
            </div>
          </b-card-group>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container text-center">
        <img src="../assets/imgs/head-unii.png" alt="" />
        <h1>Why Recycle Business?</h1>
        <p>
          ธุรกิจรีไซเคิล คือ
          ธุรกิจที่ดำเนินการเก็บรวบรวมเศษวัสดุและชิ้นส่วนโลหะและอโลหะที่ใช้แล้วและไม่เป็น
          อันตราย เช่น ขยะจากครัวเรือน กระดาษ พลาสติก ชิ้นส่วนเครื่องใช้
          คอมพิวเตอร์ และยานพาหนะต่างๆ และสิ่งของที่นำกลับมาใช้ใหม่ได้ เป็นต้น
          เพื่อขายส่งโดยไม่มีกระบวนการเปลี่ยนรูป และธุรกิจที่ดำเนินการ
          แปรรูปเพื่อนำมาเป็นวัสดุที่ใช้แล้วกลับมาใช้ใหม่
          โดยกระบวนการแปรสภาพทางกลหรือทางเคมี
        </p>
        <img src="../assets/imgs/mockupIP.png" alt="" />
      </div>
    </section>

    <section id="process">
      <div class="container mt-5">
        <b-card style="border: 1px solid #69197b">
          <!-- <div class="col-md-8">
            <h3>
              หลากหลายการบริการจาก ยูนี่ ออนไลน์
              ที่พร้อมมอบบริการที่ดีที่สุดกับคุณ
            </h3>
          </div> -->
          <div>
            <h1>เส้นทางวงจรธุรกิจ รีไซเคิลของ Unii</h1>
            <b-card style="border: none">
              <img src="../assets/imgs/PTCF.png" alt="" width="100%" />
            </b-card>
          </div>
          <div>
            <b-card-group deck>
              <b-card
                style="border-radius: 5px; box-shadow: 0px 6px 10px #c1c1c133"
              >
                <b-card-title>
                  <h3>เป้าหมาย ลดต้นทุน/ลดเวลา/เพิ่มรายได้</h3>
                </b-card-title>
                <b-card-text
                  ><ul>
                    <li>
                      (ลดต้นทุนกว่า 71%) ให้ผู้รับซื้อทั่วไป (T) มากกว่า 120,000
                      ล้านบาท/ปี
                    </li>
                    <li>
                      เพิ่มเวลาว่าง (ลดวันทำงานไปกว่า 73%) ให้กับผู้ใช้ Unii
                      เพื่อทำสิ่งอื่นๆ ได้อย่างมากมาย
                    </li>
                    <li>ช่วยรัฐจัดเก็บภาษีได้หลาย 10,000 ล้านบาท/ปี</li>
                    <li>
                      สร้างมาตรฐานให้ธุรกิจรีไซเคิลครบทั้งระบบจากต้นน้ำถึงปลายน้ำ
                    </li>
                    <li>สร้างมาตรฐานไทย เพื่อ ให้แข่งขันได้ในมาตรฐานโลก</li>
                  </ul></b-card-text
                >
              </b-card>
              <b-card
                style="border-radius: 5px; box-shadow: 0px 6px 10px #c1c1c133"
              >
                <b-card-title>
                  <h3>ลดต้นทุน/ลดเวลา/เพิ่มรายได้"</h3>
                </b-card-title>
                <b-card-text
                  ><ul>
                    <li>ลดต้นทุน 20,000 บาท/เดือน (กว่า 71%)</li>
                    <li>
                      ลดเวลาทำงานเหลือ 2 วัน/เที่ยว (กว่า 73%) เพิ่มรายได้
                      20,000 บาท/เดือน 240,000 บาท/ปี ได้วันว่าง 22 วัน/เดือน
                      264 วัน/ปี
                    </li>
                  </ul></b-card-text
                >
              </b-card>
            </b-card-group>
          </div>
        </b-card>
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
