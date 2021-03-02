<template>
  <div>
    <Banner />
    <Video />
    <Partner />
    <Noticeboard />
    <Service />
    <About />
    <Process />
    <News />
    <Post />
    <Team />

    <!-- <client-only>
      <carousel
        class="sectioncarousel"
        :autoplay="true"
        :autoHeight="true"
        :lazyLoad="true"
        :loop="true"
        :items="1"
        :nav="false"
      >
        <img
          v-for="(banner, index) in banners"
          :key="index"
          :src="`https://api.unii.co.th/api/uploads/${banner.image}`"
          width="100%"
        />
      </carousel>
    </client-only> -->

    <!-- <section id="video">
      <div class="container pt-5">
        <div class="text-center">
          <h1>ทำความรู้จักกับ ยูนี่ ออนไลน์</h1>
          <p>
            Disrupt ต้นทุนธุรกิจรีไซเคิล ครั้งยิ่งใหญ่
            ครั้งแรกของประเทศไทยคืนทุนไว ได้กำไรแน่นอน
          </p>
        </div>
        <div>
          <b-embed
            src="https://www.youtube.com/embed/CMQOxxgvgi8?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></b-embed>
        </div>

        <div class="mt-3">
          <carousel
            class="sectioncarousel"
            :autoplay="true"
            :loop="true"
            :margin="20"
            :video="true"
            :lazyLoad="true"
            :nav="false"
            :autoplayHoverPause="true"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 3, nav: false },
            }"
          >
            <div v-for="(video, index) in videos" :key="index" :video="video">
              <img
                :src="`https://img.youtube.com/vi/` + video.title + `/0.jpg`"
                style="width: 100%; height: 200px"
                alt=""
              />
            </div>
          </carousel>
          <div class="text-center">
            <NuxtLink to="/videos/allvideos">
              <b-button size="lg" class="btn btn-purple" type="submit"
                >วีดีโอทั้งหมด</b-button
              ></NuxtLink
            >
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section id="partner">
      <div class="container my-5">
        <h3 class="text-center mb-4">ส่งสินค้ากลับสู่ผู้ผลิตทุกราย</h3>
        <carousel
          class="sectioncarousel"
          :autoplay="true"
          :loop="true"
          :items="4"
          :nav="false"
        >
          <img
            v-for="(partner, index) in partners"
            :key="index"
            class="img-fluid"
            :src="`https://api.unii.co.th/api/uploads/${partner.image}`"
          />
        </carousel>
      </div>
    </section> -->

    <!-- <section id="overley">
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
    </section> -->

    <!-- <section id="service">
      <div class="container py-5">
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
    </section> -->

    <!-- <section id="about">
      <div class="container py-5">
        <div class="text-center col-lg-8 mx-auto">
          <img src="../assets/imgs/head-unii.png" alt="" />
          <h1 class="mt-3">Why Recycle Business?</h1>
          <p>
            ธุรกิจรีไซเคิล คือ
            ธุรกิจที่ดำเนินการเก็บรวบรวมเศษวัสดุและชิ้นส่วนโลหะและอโลหะที่ใช้แล้วและไม่เป็น
            อันตราย เช่น ขยะจากครัวเรือน กระดาษ พลาสติก ชิ้นส่วนเครื่องใช้
            คอมพิวเตอร์ และยานพาหนะต่างๆ และสิ่งของที่นำกลับมาใช้ใหม่ได้ เป็นต้น
            เพื่อขายส่งโดยไม่มีกระบวนการเปลี่ยนรูป และธุรกิจที่ดำเนินการ
            แปรรูปเพื่อนำมาเป็นวัสดุที่ใช้แล้วกลับมาใช้ใหม่
            โดยกระบวนการแปรสภาพทางกลหรือทางเคมี
          </p>
        </div>

        <div class="col-xs-3 col-sm-8 col-md-6 col-lg-6 mx-auto mymargin">
          <img src="../assets/imgs/mockupIP.png" alt="" width="100%" />
        </div>
      </div>
    </section> -->

    <!-- <client-only>
      <section id="process">
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
                  class="px-4"
                  style="border-radius: 5px; box-shadow: 0px 6px 10px #c1c1c133"
                >
                  <b-card-title>
                    <h3>เป้าหมาย ลดต้นทุน/ลดเวลา <br />/เพิ่มรายได้</h3>
                  </b-card-title>
                  <b-card-text
                    ><ul>
                      <div class="myli">
                        <li>
                          (ลดต้นทุนกว่า 71%) ให้ผู้รับซื้อทั่วไป (T) มากกว่า
                          120,000 ล้านบาท/ปี
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
                      </div>
                    </ul></b-card-text
                  >
                </b-card>
                <b-card
                  class="px-4"
                  style="border-radius: 5px; box-shadow: 0px 6px 10px #c1c1c133"
                >
                  <b-card-title>
                    <h3>ลดต้นทุน/ลดเวลา/เพิ่มรายได้</h3>
                  </b-card-title>
                  <b-card-text
                    ><ul>
                      <div class="myli">
                        <li>ลดต้นทุน 20,000 บาท/เดือน (กว่า 71%)</li>
                        <li>
                          ลดเวลาทำงานเหลือ 2 วัน/เที่ยว (กว่า 73%) เพิ่มรายได้
                          20,000 บาท/เดือน 240,000 บาท/ปี ได้วันว่าง 22
                          วัน/เดือน 264 วัน/ปี
                        </li>
                      </div>
                    </ul></b-card-text
                  >
                </b-card>
              </b-card-group>
            </div>
          </b-card>
        </div>
      </section>
    </client-only> -->

    <!-- <section id="news" class="mt-4">
      <div class="container my-5">
        <h1 class="pb-5">Unii News ข่าวสาร ยูนี่</h1>
        <div
          v-for="(activity, index) in [activitys[0]]"
          :key="index"
          :activity="activity"
          class="row"
        >
          <div class="zoom col-xs-3 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <b-embed
              type="iframe"
              aspect="16by9"
              :src="`https://www.youtube.com/embed/` + activity.video"
              allowfullscreen
            ></b-embed>
            <p class="pt-2">
              {{ activity.title }}
            </p>
            <p>December 29,2020</p>
            <NuxtLink
              :to="{ name: 'news-id', params: { id: activity._id } }"
              target="_blank"
              class="stretched-link"
            ></NuxtLink>
          </div>
          <div
            class="col-xs-3 col-sm-12 col-md-12 col-lg-12 col-xl-6"
            style="margin-top: -20px"
          >
            <hr class="vl d-none d-xl-block" />

            <div
              v-for="(activity, index) in [activitys[1], activitys[2]]"
              :key="index"
              :activity="activity"
              class="card mb-3 zoom"
              style="max-width: 540px"
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <b-embed
                    type="iframe"
                    aspect="16by9"
                    :src="`https://www.youtube.com/embed/` + activity.video"
                    allowfullscreen
                  ></b-embed>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ activity.title }}
                    </h5>
                    <p class="card-text">
                      <small class="">October 14,2020</small>
                    </p>
                    <NuxtLink
                      :to="{ name: 'news-id', params: { id: activity._id } }"
                      target="_blank"
                      class="stretched-link"
                    ></NuxtLink>
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
    </section> -->

    <!-- <section id="blog">
      <div class="container mt-5">
        <h1>บทความดีๆจาก ยูนี่ ออนไลน์</h1>
        <div class="row row-cols-1 row-cols-md-3">
          <Card
            v-for="(post, index) in [posts[0], posts[1], posts[2]]"
            :key="index"
            :post="post"
          />
        </div>
        <div class="text-center">
          <NuxtLink to="/blogs/allblogs">
            <b-button size="lg" class="btn btn-purple" type="submit"
              >ดูทั้งหมด</b-button
            ></NuxtLink
          >
        </div>
      </div>
    </section> -->

    <!-- <section id="team">
      <div class="container py-5">
        <h1>MEET OUR TEAM</h1>
        <p>รายชื่อทีมผู่ก่อตั้ง UNII</p>
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-4 text-center grid-container1">
            <img src="../assets/imgs/person-1.png" alt="" />
            <div class="grid-container2">
              <h5 class="pt-3 mb-0">คุณพรนริศ ชวนไชยสิทธิ์</h5>
              <p>
                ผู้ร่วมก่อตั้ง
                <br />
                ประธานคณะกรรมการกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 text-center grid-container1">
            <img src="../assets//imgs/person-5.png" alt="" />
            <div class="grid-container2">
              <h5 class="pt-3 mb-0">คุณธีระชัย จึงวิวัฒณาภรณ์</h5>
              <p>
                ผู้ร่วมก่อตั้ง
                <br />
                รองประธานคณะกรรมการฝ่ายกิจการต่างประเทศกลุ่มบริษัทยูนี่ ออนไลน์
                จำกัด
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 text-center grid-container1">
            <img src="../assets//imgs/person-4.png" alt="" />
            <div class="grid-container2">
              <h5 class="pt-3 mb-0">ผศ.ดร.ปุ่น เที่ยงบูรณธรรม</h5>
              <p>
                ผู้ร่วมก่อตั้ง
                <br />
                คณะกรรมการกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด
              </p>
            </div>
          </div>

          <div class="col-sm-12 col-md-4 col-lg-4 text-center grid-container1">
            <img src="../assets//imgs/person-2.png" alt="" />
            <div class="grid-container2">
              <h5 class="pt-3 mb-0">คุณศิวัช ภูธนแสงทอง</h5>
              <p>
                ผู้ร่วมก่อตั้ง
                <br />
                ประธานเจ้าหน้าที่บริหารกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 text-center grid-container1">
            <img src="../assets//imgs/person-3.png" alt="" />
            <div class="grid-container2">
              <h5 class="pt-3 mb-0">คุณเฟาซีย์ ออสันตินุตสกุล</h5>
              <p>
                ผู้ร่วมก่อตั้ง
                <br />
                ประธานเจ้าหน้าที่ฝ่ายกลยุธองค์กรกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4 text-center grid-container1">
            <img src="../assets//imgs/person-6.png" alt="" />
            <div class="grid-container2">
              <h5 class="pt-3 mb-0">คุณทนงค์ มาถาวร</h5>
              <p>
                ผู้ร่วมก่อตั้ง
                <br />
                คณะกรรมการกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Video from '~/components/Video.vue'
import Partner from '~/components/Partner.vue'
import Noticeboard from '~/components/Noticeboard.vue'
import About from '~/components/About.vue'
import Process from '~/components/Process.vue'
import Service from '~/components/Service.vue'
import News from '~/components/News.vue'
import Post from '~/components/Post.vue'
import Team from '~/components/Team.vue'
export default {
  components: {
    Banner,
    Video,
    Partner,
    Noticeboard,
    About,
    Process,
    Service,
    News,
    Post,
    Team,
  },
}
</script>

<style>
@import '../assets/scss/main.scss';
.outline-purple {
  color: #69197b;
  background-color: #ffd700;
  border-color: #ffd700;
}
.outline-purple:hover {
  background-color: #69197b;
}

.sectioncarousel {
  /* position: absolute; */
  width: 100%;
}
</style>
