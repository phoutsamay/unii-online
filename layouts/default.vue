<template>
  <div>
    <b-navbar class="container" toggleable="lg" type="light">
      <b-navbar-brand href="#"
        ><img src="../assets/imgs/logo.png" alt=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="#">หน้าแรก</b-nav-item>
          <b-nav-item href="#">บริการของเรา</b-nav-item>
          <b-nav-item href="#">เกี่ยวกับเรา</b-nav-item>
          <b-nav-item href="#">วีดีโอ</b-nav-item>
          <b-nav-item href="#">ติดต่อเรา</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="">
          <b-nav-form>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >เข้าสู่ระบบ</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
    <!-- <section id="footer">
      <div class="container text-center py-4">
        <img src="../assets/imgs/logo.png" alt="" />
        <p>Connect with us</p>
        <a href="https://www.facebook.com/Unii.co.th" target="blank"
          ><i class="fab fa-facebook"></i
        ></a>

        <a
          href="https://www.youtube.com/channel/UCpmnNygcabMF-KReKDXY56w"
          target="blank"
          ><i class="fab fa-youtube"></i
        ></a>
        <p class="mt-3">Copyright&copy; 2020 Unii Online</p>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
/* .btn-purple {
  background: transparent linear-gradient(180deg, #993a96 0%, #69197b 100%) 0%
    0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
}
p {
  color: #ffffff;
}
i {
  color: #ffffff;
} */
</style>
