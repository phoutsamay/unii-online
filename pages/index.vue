<template>
  <div>
    <section id="carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
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
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/eU1uoF14ve0"
            allowfullscreen
          ></b-embed>
        </div>

        <div class="mt-3">
          <div
            id="recipeCarousel"
            class="carousel slide w-100"
            data-ride="carousel"
          >
            <div class="carousel-inner w-100" role="listbox">
              <div class="carousel-item row no-gutters active">
                <div class="col-4 float-left">
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/eU1uoF14ve0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                </div>
                <div class="col-4 float-left">
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/eU1uoF14ve0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                </div>
                <div class="col-4 float-left">
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/eU1uoF14ve0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                </div>
              </div>
              <div class="carousel-item row no-gutters">
                <div class="col-4 float-left">
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/eU1uoF14ve0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                </div>
                <div class="col-4 float-left">
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/eU1uoF14ve0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                </div>
                <div class="col-4 float-left">
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/eU1uoF14ve0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#recipeCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#recipeCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="partner">
      <div class="container my-5">
        <h3 class="text-center mb-4">ส่งสินค้ากลับสู่ผู้ผลิตทุกราย</h3>
        <div
          id="recipeCarousel"
          class="carousel slide w-100"
          data-ride="carousel"
        >
          <div class="carousel-inner w-100" role="listbox">
            <div class="carousel-item row no-gutters active">
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-1.png" />
              </div>
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-2.png" />
              </div>
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-3.png" />
              </div>
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-4.png" />
              </div>
            </div>
            <div class="carousel-item row no-gutters">
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-1.png" />
              </div>
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-2.png" />
              </div>
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-3.png" />
              </div>
              <div class="col-3 float-left">
                <img class="img-fluid" src="../assets/imgs/trust-4.png" />
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#recipeCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#recipeCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

    <!-- <section id="partner">
      <div class="container py-5">
        <h3 class="text-center mb-4">ส่งสินค้ากลับสู่ผู้ผลิตทุกราย</h3>
        <img src="../assets/imgs/partner.jpg" alt="" width="100%" />
      </div>
    </section> -->

    <section id="overley">
      <div class="container mt-5">
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
            <div class="my-4">
              <b-button
                size="sm"
                class="btn btn-purple my-2 my-sm-0"
                type="submit"
                >สมัครอบรม</b-button
              >
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 text-center mt-5">
            <img src="../assets/imgs/mockup-register.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="service">
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
    </section>

    <section id="about">
      <div class="container py-5">
        <div class="text-center col-lg-8 mx-auto">
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
        </div>
        <div class="col-xs-3 col-sm-8 col-md-6 col-lg-6 mx-auto mymargin">
          <img src="../assets/imgs/mockupIP.png" alt="" width="100%" />
        </div>
      </div>
    </section>

    <client-only>
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
                  style="border-radius: 5px; box-shadow: 0px 6px 10px #c1c1c133"
                >
                  <b-card-title>
                    <h3>เป้าหมาย ลดต้นทุน/ลดเวลา/เพิ่มรายได้</h3>
                  </b-card-title>
                  <b-card-text
                    ><ul>
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
    </client-only>

    <section id="news" class="mt-4">
      <div class="container my-5">
        <h1 class="pb-5">ข่าวสารที่น่าสนใจ จาก ยูนี่ ออนไลน์</h1>
        <div class="row">
          <div class="col-xs-3 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="../assets/videos/video1.mp4"
              allowfullscreen
            ></b-embed>
            <p class="pt-2">
              #ฟังชัดๆ...!!! #วิสัยทัศน์นายกสมาคมซาเล้งและร้านรับซื้อของเก่า
              #ที่แสดงถึงภูมิความรู้
            </p>
            <p>October 14,2020</p>
          </div>
          <div
            class="col-xs-3 col-sm-12 col-md-12 col-lg-12 col-xl-6"
            style="margin-top: -20px"
          >
            <hr class="vl d-none d-xl-block" />
            <hr />
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-6">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/iQ8VkAAWggg"
                  allowfullscreen
                ></b-embed>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6">
                <p class="cut-text-multi pt-2">
                  ธุรกิจรีไซเคิล คือ
                  ธุรกิจที่ดำเนินการเก็บรวบรวมเศษวัสดุและชิ้นส่วนโลหะและอโลหะที่ใช้แล้วและไม่เป็น
                  อันตราย เช่น ขยะจากครัวเรือน กระดาษ พลาสติก ชิ้นส่วนเครื่องใช้
                  คอมพิวเตอร์ และยานพาหนะต่างๆ และสิ่งของที่นำกลับมาใช้ใหม่ได้
                  เป็นต้น เพื่อขายส่งโดยไม่มีกระบวนการเปลี่ยนรูป
                  และธุรกิจที่ดำเนินการ
                  แปรรูปเพื่อนำมาเป็นวัสดุที่ใช้แล้วกลับมาใช้ใหม่
                  โดยกระบวนการแปรสภาพทางกลหรือทางเคมี
                </p>
                <p>October 14,2020</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-6">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/59IH6cldhUw"
                  allowfullscreen
                ></b-embed>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6">
                <p class="cut-text-multi pt-2">
                  ธุรกิจรีไซเคิล คือ
                  ธุรกิจที่ดำเนินการเก็บรวบรวมเศษวัสดุและชิ้นส่วนโลหะและอโลหะที่ใช้แล้วและไม่เป็น
                  อันตราย เช่น ขยะจากครัวเรือน กระดาษ พลาสติก ชิ้นส่วนเครื่องใช้
                  คอมพิวเตอร์ และยานพาหนะต่างๆ และสิ่งของที่นำกลับมาใช้ใหม่ได้
                  เป็นต้น เพื่อขายส่งโดยไม่มีกระบวนการเปลี่ยนรูป
                  และธุรกิจที่ดำเนินการ
                  แปรรูปเพื่อนำมาเป็นวัสดุที่ใช้แล้วกลับมาใช้ใหม่
                  โดยกระบวนการแปรสภาพทางกลหรือทางเคมี
                </p>
                <p>October 14,2020</p>
              </div>
            </div>
            <hr />
            <div class="text-center">
              <b-button size="sm" class="btn btn-purple" type="submit"
                >ดูเพิ่มเติม</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog">
      <div class="container py-5">
        <div>
          <b-card-group deck>
            <b-card
              title="การสร้างเครือข่ายธุรกิจสำคัญอย่างยิ่ง"
              sub-title="3 กันยายน 2563 | ข่าวสารองค์กร"
              img-src="../assets/imgs/b1.jpg"
              img-alt="Image"
              img-top
              class="shadow-sm"
            >
              <b-card-text>
                ยิ่งเครือข่ายธุรกิจที่มีระบบออนไลน์ที่ดีสนับสนุน
                ยิ่งประสบความสำเร็จได้อย่างรวดเร็ว และมั่นคง
              </b-card-text>
            </b-card>

            <b-card
              title="การสร้างเครือข่ายธุรกิจสำคัญอย่างยิ่ง"
              sub-title="3 กันยายน 2563 | ข่าวสารองค์กร"
              img-src="../assets/imgs/b2.jpg"
              img-alt="Image"
              img-top
              class="shadow-sm"
            >
              <b-card-text>
                ยิ่งเครือข่ายธุรกิจที่มีระบบออนไลน์ที่ดีสนับสนุน
                ยิ่งประสบความสำเร็จได้อย่างรวดเร็ว และมั่นคง
              </b-card-text>
            </b-card>

            <b-card
              title="การสร้างเครือข่ายธุรกิจสำคัญอย่างยิ่ง"
              sub-title="3 กันยายน 2563 | ข่าวสารองค์กร"
              img-src="../assets/imgs/b3.jpg"
              img-alt="Image"
              img-top
              class="shadow-sm"
            >
              <b-card-text>
                ยิ่งเครือข่ายธุรกิจที่มีระบบออนไลน์ที่ดีสนับสนุน
                ยิ่งประสบความสำเร็จได้อย่างรวดเร็ว และมั่นคง
              </b-card-text>
            </b-card>
          </b-card-group>
          <div class="text-center mt-3">
            <b-button size="sm" class="btn btn-purple" type="submit"
              >ดูทั้งหมด</b-button
            >
          </div>
        </div>
      </div>
    </section>

    <section id="team">
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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      slides: [
        [
          'https://picsum.photos/1024/480/?image=45',
          'https://picsum.photos/1024/480/?image=40',
          'https://picsum.photos/1024/480/?image=47',
        ],
        [
          'https://picsum.photos/1024/480/?image=48',
          'https://picsum.photos/1024/480/?image=39',
          'https://picsum.photos/1024/480/?image=55',
        ],
        [
          'https://picsum.photos/1024/480/?image=51',
          'https://picsum.photos/1024/480/?image=52',
          'https://picsum.photos/1024/480/?image=53',
        ],
      ],
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

<style>
@import '../assets/scss/main.scss';
</style>
