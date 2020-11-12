<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

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
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    <client-only>
      <div class="container mt-5">
        <b-card style="border: 1px solid #69197b">
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
    </client-only>
    <div>
      <h1 data-aos="fade">AOS Demo</h1>

      <p data-aos="flip-up" data-aos-duration="1000">
        AOS is awesome! Thank you
        <a class="anchor" href="https://twitter.com/michalsnik">
          Michał Sajnóg
        </a>
        😄
      </p>

      <p data-aos="slide-up" data-aos-easing="ease">
        Paragraph with fade up animation and <code>ease</code> easing.
      </p>

      <p data-aos="zoom-in" data-aos-anchor=".anchor">
        Paragraph with fade down animation with the above link as anchor. This
        makes this paragraph animate before the previous paragraph starts
        animating.
      </p>

      <hr class="my-5" />
    </div>
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
