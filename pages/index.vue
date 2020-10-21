<template>
  <div>
    <section id="carousel">
      <div>
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
          <!-- <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide> -->

          <!-- Slides with custom text -->
          <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide> -->

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="~/assets/imgs/banner.jpg"
          ></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <!-- <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
          </b-carousel-slide> -->

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <!-- <b-carousel-slide
            caption="Blank Image"
            img-blank
            img-alt="Blank image"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel
              est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide> -->
        </b-carousel>

        <!-- <p class="mt-4">
        Slide #: {{ slide }}<br />
        Sliding: {{ sliding }}
      </p> -->
      </div>
    </section>

    <section id="video">
      <div class="container">
        <div class="text-center mt-5">
          <img src="~/assets/imgs/head-unii.png" alt="" />
          <h1 class="py-3" style="color: #69197b; font-weight: 700">
            ทำความรู้จักกับยูนี่ ออนไลน์
          </h1>
          <p class="lead">
            Disrupt ต้นทุนธุรกิจรีไซเคิลครั้งยิ่งใหญ่ ครั้งแรกของประเทศไทย
            คืนทุนไว ได้กำไรแ่นอน
          </p>
          <div>
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/eU1uoF14ve0"
              allowfullscreen
            ></b-embed>
          </div>
          <div class="mt-5">
            <b-button
              href="https://www.youtube.com/channel/UCpmnNygcabMF-KReKDXY56w"
              target="blank"
              variant="light"
              class="btn btn-purple"
              >ดูเพิ่มเติม</b-button
            >
          </div>
        </div>
      </div>
    </section>

    <section id="partner">
      <div class="container mt-5 mb-5">
        <p style="color: #69197b">TRUSTED BY</p>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="~/assets/imgs/partner.jpg"
          ></b-carousel-slide>
          <!-- <b-carousel-slide
            img-src="~/assets/imgs/trust-2.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/imgs/trust-3.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/imgs/trust-4.png"
          ></b-carousel-slide> -->

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        </b-carousel>
      </div>
    </section>

    <section id="overlay">
      <div>
        <b-card bg-variant="dark" text-variant="white" style="padding: 0">
          <div class="container pt-5">
            <div class="row">
              <div class="col-md-6">
                <b-card-title>
                  <h1 style="color: #69197b; font-weight: 700">
                    สมัครอบรม Unii Mini Center #UMC
                  </h1>
                </b-card-title>
                <b-card-text>
                  UNII Application Disrupt ต้นทุนธุรกิจรีไซเคิลครั้งยิ่งใหญ่
                  ครั้งแรกของประเทศไทย คืนทุนไว ได้กำไรแ่นอน สมัครด่วนเพียง
                  8,888 บาท/ท่าน เท่านั้น อบรมวันที่ 13 - 14 พฤศจิกายน 2562 เวลา
                  08.30 น. - 17.00 น. อาคารพร้อมพันธุ์ 3 ลาดพร้าว ซอย 3
                  (รับรองผลคืนเงิน 100% ถ้าไม่สามารถสร้างเงินได้)
                </b-card-text>
                <button class="btn btn-purple">สมัครอบรม</button>
              </div>
              <div class="col-md-2"></div>
              <center>
                <div class="col-md-2 mt-5">
                  <img src="~/assets/imgs/mockup-register.png" alt="" />
                </div>
              </center>
            </div>
          </div>
        </b-card>
        <!-- <b-card overlay bg-variant="dark" text-variant="white">
          <div class="col-md-6">
            <b-card-title> สมัครอบรม Unii Mini Center #UMC </b-card-title>
            <b-card-text>
              UNII Application Disrupt ต้นทุนธุรกิจรีไซเคิลครั้งยิ่งใหญ่
              ครั้งแรกของประเทศไทย คืนทุนไว ได้กำไรแ่นอน สมัครด่วนเพียง 8,888
              บาท/ท่าน เท่านั้น อบรมวันที่ 13 - 14 พฤศจิกายน 2562 เวลา 08.30 น.
              - 17.00 น. อาคารพร้อมพันธุ์ 3 ลาดพร้าว ซอย 3 (รับรองผลคืนเงิน 100%
              ถ้าไม่สามารถสร้างเงินได้)
            </b-card-text>
          </div>
          <button class="btn btn-purple mt-5">สมัครอบรม</button>
        </b-card> -->
      </div>
    </section>

    <section id="service">
      <div class="container mt-5">
        <!-- <div>
          <h3>
            หลากหลายการบริการจาก ยูนี่ ออนไลน์
            ที่พร้อมมอบบริการที่ดีที่สุดกับคุณ
          </h3>
        </div> -->
        <div>
          <b-card-group deck>
            <b-card
              title="Unii Recycle"
              img-src="~/assets/imgs/recycle-icon.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2 mt-5"
            >
              <b-card-text>
                ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
              </b-card-text>

              <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
            </b-card>
            <b-card
              title="Unii Recycle"
              img-src="~/assets/imgs/recycle-icon.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2 mt-5"
            >
              <b-card-text>
                ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
              </b-card-text>

              <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
            </b-card>
            <b-card
              title="Unii Recycle"
              img-src="~/assets/imgs/recycle-icon.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2 mt-5"
            >
              <b-card-text>
                ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
              </b-card-text>

              <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
            </b-card>
            <b-card
              title="Unii Recycle"
              img-src="~/assets/imgs/recycle-icon.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2 mt-5"
            >
              <b-card-text>
                ติดตามข้อมูลข่าวสารสำหรับ Unii Recylce
              </b-card-text>

              <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
            </b-card>
          </b-card-group>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container">
        <div class="text-center mt-5" style="padding-top: 100px">
          <img src="~/assets/imgs/head-unii.png" alt="" />
          <h3 class="py-3" style="color: #69197b; font-weight: 700">
            ทำความรู้จักกับยูนี่ ออนไลน์
          </h3>
          <center>
            <p class="lead col-md-8">
              ธุรกิจรีไซเคิล คือ
              ธุรกิจที่ดำเนินการเก็บรวบรวมเศษวัสดุและชิ้นส่วนโลหะและอโลหะที่ใช้แล้วและไม่เป็น
              อันตราย เช่น ขยะจากครัวเรือน กระดาษ พลาสติก ชิ้นส่วนเครื่องใช้
              คอมพิวเตอร์ และยานพาหนะต่างๆ และสิ่งของที่นำกลับมาใช้ใหม่ได้
              เป็นต้น เพื่อขายส่งโดยไม่มีกระบวนการเปลี่ยนรูป
              และธุรกิจที่ดำเนินการ
              แปรรูปเพื่อนำมาเป็นวัสดุที่ใช้แล้วกลับมาใช้ใหม่
              โดยกระบวนการแปรสภาพทางกลหรือทางเคมี
            </p>
          </center>
          <center>
            <div class="col-md-6 py-5">
              <img src="~/assets/imgs/mockupIP.png" alt="" width="100%" />
            </div>
          </center>
        </div>
      </div>
    </section>

    <section id="process">
      <div class="container mt-5">
        <b-card style="border: 1px solid #69197b">
          <div class="col-md-8">
            <h3 style="color: #69197b; font-weight: 700">
              หลากหลายการบริการจาก ยูนี่ ออนไลน์
              ที่พร้อมมอบบริการที่ดีที่สุดกับคุณ
            </h3>
          </div>
          <div>
            <b-card style="border: none">
              <img src="~/assets/imgs/PTCF.png" alt="" width="100%" />
            </b-card>
            <!-- <b-card-group deck>
              <b-card
                title="ผู้ขายทั่วไป"
                img-src="~/assets/imgs/cycle-p.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; border: none"
                class="text-center mb-2 mt-5"
              >
              </b-card>
              <b-card
                title="ผู้ขายทั่วไป"
                img-src="~/assets/imgs/cycle-t.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; border: none"
                class="text-center mb-2 mt-5"
              >
              </b-card>
              <b-card
                title="ผู้ขายทั่วไป"
                img-src="~/assets/imgs/cycle-c.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; border: none"
                class="text-center mb-2 mt-5"
              >
              </b-card>
              <b-card
                title="ผู้ขายทั่วไป"
                img-src="~/assets/imgs/cycle-p.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; border: none"
                class="text-center mb-2 mt-5"
              >
              </b-card>
            </b-card-group> -->
          </div>
          <div>
            <b-card-group deck>
              <b-card
                style="border-radius: 5px; box-shadow: 0px 6px 10px #c1c1c133"
              >
                <b-card-title>
                  <h3 style="color: #69197b">
                    เป้าหมาย ลดต้นทุน/ลดเวลา/เพิ่มรายได้
                  </h3>
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
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
              </b-card>
              <b-card
                style="border-radius: 5px; box-shadow: 0px 6px 10px #c1c1c133"
              >
                <b-card-title>
                  <h3 style="color: #69197b">ลดต้นทุน/ลดเวลา/เพิ่มรายได้"</h3>
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
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
              </b-card>
            </b-card-group>
          </div>
        </b-card>
      </div>
    </section>

    <section id="team">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 mb-5">
            <h1 style="color: #69197b; font-weight: 700">MEET OUR TEAM</h1>
            <p>รายชื่อทีมผู้ก่อตั้ง Unii</p>
          </div>

          <div class="row">
            <div class="col-md-4 text-center mb-3">
              <img src="~/assets/imgs/person-1.png" alt />
              <h5 class="pt-2">คุณพรนริศ ชวนไชยสิทธิ์</h5>
              <p>ประธานคณะกรรมการกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด</p>
            </div>
            <div class="col-md-4 text-center">
              <img src="~/assets//imgs/person-5.png" alt />
              <h5 class="pt-2">คุณธีระชัย จึงวิวัฒณาภรณ์</h5>
              <p>
                รองประธานคณะกรรมการฝ่ายกิจการต่างประเทศกลุ่มบริษัทยูนี่ ออนไลน์
                จำกัด
              </p>
            </div>
            <div class="col-md-4 text-center">
              <img src="~/assets//imgs/person-4.png" alt />
              <h5 class="pt-2">ผศ.ดร.ปุ่น เที่ยงบูรณธรรม</h5>
              <p>คณะกรรมการกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด</p>
            </div>
            <div class="col-md-4 text-center">
              <img src="~/assets//imgs/person-2.png" alt />
              <h5 class="pt-2">คุณศิวัช ภูธนแสงทอง</h5>
              <p>ประธานเจ้าหน้าที่บริหารกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด</p>
            </div>
            <div class="col-md-4 text-center">
              <img src="~/assets//imgs/person-3.png" alt />
              <h5 class="pt-2">คุณเฟาซีย์ ออสันตินุตสกุล</h5>
              <p>
                ประธานเจ้าหน้าที่ฝ่ายกลยุธองค์กรกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด
              </p>
            </div>
            <div class="col-md-4 text-center">
              <img src="~/assets//imgs/person-6.png" alt />
              <h5 class="pt-2">คุณทนงค์ มาถาวร</h5>
              <p>คณะกรรมการกลุ่มบริษัทยูนี่ ออนไลน์ จำกัด</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="news">
      <div class="container mt-5">
        <div class="row py-5">
          <div class="col-sm-6 mt-5 mb-3">
            <b-embed type="video" aspect="4by3" controls>
              <source src="~/assets/videos/video1.mp4" type="video/mp4" />
            </b-embed>
            <h4 style="color: aliceblue">
              #ฟังชัดๆ...!!! #วิสัยทัศน์นายกสมาคมซาเล้งและร้านรับซื้อของเก่า
              #ที่แสดงถึงภูมิความรู้ในเรื่องเทคโนโลยีและDigitalPlatFormThai
            </h4>
          </div>
          <div class="col-sm-6">
            <hr
              style="
                height: 2px;
                border-width: 0;
                color: gray;
                background-color: gray;
              "
            />
            <div class="row">
              <div>
                <b-card
                  no-body
                  class="overflow-hidden"
                  style="max-width: 540px"
                >
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img
                        height="200px"
                        src="~/assets/imgs/fake1.jpg"
                        alt="Image"
                        class="rounded-0"
                      ></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body
                        title="ธุรกิจรีไซเคิล"
                        style="color: aliceblue"
                      >
                        <b-card-text style="color: aliceblue">
                          ธุรกิจรีไซเคิล คือ
                          ธุรกิจที่ดำเนินการเก็บรวบรวมเศษวัสดุและชิ้นส่วนโลหะและอโลหะที่ใช้แล้วและไม่เป็น
                          อันตราย
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </div>
            <hr
              style="
                height: 2px;
                border-width: 0;
                color: gray;
                background-color: gray;
              "
            />
            <div class="row">
              <div>
                <b-card
                  no-body
                  class="overflow-hidden"
                  style="max-width: 540px"
                >
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img
                        height="200px"
                        src="~/assets/imgs/fake1.jpg"
                        alt="Image"
                        class="rounded-0"
                      ></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body
                        title="ธุรกิจรีไซเคิล"
                        style="color: aliceblue"
                      >
                        <b-card-text style="color: aliceblue">
                          ธุรกิจรีไซเคิล คือ
                          ธุรกิจที่ดำเนินการเก็บรวบรวมเศษวัสดุและชิ้นส่วนโลหะและอโลหะที่ใช้แล้วและไม่เป็น
                          อันตราย
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </div>
            <hr
              style="
                height: 2px;
                border-width: 0;
                color: gray;
                background-color: gray;
              "
            />
          </div>
        </div>
      </div>
    </section>

    <section id="blog">
      <div class="container mt-5">
        <div>
          <h3 style="color: #69197b">
            บทความดีดี จาก ยูนี่ ออนไลน์ ที่พร้อมเสิร์ฟให้กับคุณ
          </h3>
        </div>
        <b-card-group deck>
          <b-card
            img-src="~/assets/imgs/article-1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-title
              ><h5 class="card-title">
                การสร้างเครือข่ายธุรกิจสำคัญอย่างยิ่ง
              </h5></b-card-title
            >
            <b-card-text>
              <p>
                ยิ่งเครือข่ายธุรกิจที่มีระบบออนไลน์ที่ดีสนับสนุน
                ยิ่งประสบความสำเร็จได้อย่างรวดเร็ว และมั่นคง
              </p>
            </b-card-text>

            <b-button href="#" variant="light">อ่านเพิ่มเติม</b-button>
          </b-card>
          <b-card
            img-src="~/assets/imgs/article-2.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-title
              ><h5 class="card-title">
                การสร้างเครือข่ายธุรกิจสำคัญอย่างยิ่ง
              </h5></b-card-title
            >
            <b-card-text>
              <p>
                ยิ่งเครือข่ายธุรกิจที่มีระบบออนไลน์ที่ดีสนับสนุน
                ยิ่งประสบความสำเร็จได้อย่างรวดเร็ว และมั่นคง
              </p>
            </b-card-text>

            <b-button href="#" variant="light">อ่านเพิ่มเติม</b-button>
          </b-card>
          <b-card
            img-src="~/assets/imgs/article-3.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-title
              ><h5 class="card-title">
                การสร้างเครือข่ายธุรกิจสำคัญอย่างยิ่ง
              </h5></b-card-title
            >
            <b-card-text>
              <p>
                ยิ่งเครือข่ายธุรกิจที่มีระบบออนไลน์ที่ดีสนับสนุน
                ยิ่งประสบความสำเร็จได้อย่างรวดเร็ว และมั่นคง
              </p>
            </b-card-text>

            <b-button href="#" variant="light">อ่านเพิ่มเติม</b-button>
          </b-card>
        </b-card-group>
        <div class="text-center mb-3">
          <div>
            <b-button
              href="#"
              target="blank"
              variant="light"
              class="btn btn-purple"
              >ดูทั้งหมด</b-button
            >
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="contact">
      <div class="mt-5">
        <b-card img-src="~/assets/imgs/bg-contact.jpg" img-alt="Image" overlay>
          <div>
            <b-card-group deck>
              <b-card
                title="ติดต่อเราผ่าน แบบฟอร์มด้านล่าง
หรือส่งหาอีเมล์โดยตรงที่ support@unii.co.th"
                style="border: none"
              >
              </b-card>
              <b-card style="border: none">
                <b-card-text
                  ><form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">ชื่อ - นามสกุล</label>
                      <input
                        id="exampleInputName"
                        type="name"
                        class="form-control"
                        placeholder="ชื่อ - นามสกุล"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlInput1">อีเมล์ของคุณ</label>
                      <input
                        id="exampleFormControlInput1"
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1"
                        >ต้องการติดต่อเรื่องอะไร</label
                      >
                      <select class="custom-select">
                        <option selected>ต้องการติดต่อเรื่องอะไร</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1"
                        >ข้อความของคุณ</label
                      >
                      <textarea
                        id="exampleFormControlTextarea1"
                        class="form-control"
                        placeholder="ข้อความของคุณ"
                        rows="3"
                      ></textarea>
                    </div>
                    <a type="submit" class="btn btn-warning d-block"
                      >ส่งข้อความ</a
                    >
                  </form></b-card-text
                >
                >
              </b-card>
            </b-card-group>
          </div>
        </b-card>
      </div>
    </section> -->

    <!-- <p class="mt-4">
        Slide #: {{ slide }}<br />
        Sliding: {{ sliding }}
      </p> -->

    <!-- <Logo />
        <h1 class="title">unii-online</h1>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            GitHub
          </a>
        </div> -->
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

<style scoped>
#about {
  background-image: url('../assets/imgs/bg-why.jpg');
  background-size: cover;
}
#team {
  background-image: url('../assets/imgs/bg-team.png');
  background-size: cover;
}
#news {
  background-color: black;
}
.card {
  background-color: rgba(245, 245, 245, 0.1);
}
.card-header,
.card-footer {
  opacity: 1;
}
.btn-purple {
  color: white;
  background-color: #69197b;
}
#overlay .card-body {
  padding: 0 !important;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
