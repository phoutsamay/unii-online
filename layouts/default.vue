<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="light">
        <div class="container">
          <b-navbar-brand href="#"
            ><img src="~/assets/imgs/logo.png" alt="Kitten"
          /></b-navbar-brand>

          <b-navbar-toggle
            target="nav-collapse"
            class="custom-toggler"
          ></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto topnav">
              <b-nav-item href="#">หน้าแรก</b-nav-item>
              <b-nav-item class="pl-2" href="#">บริการของเรา</b-nav-item>
              <b-nav-item class="pl-2" href="#">เกี่ยวกับเรา</b-nav-item>
              <b-nav-item class="pl-2" href="#">วีดีโอ</b-nav-item>
              <b-nav-item class="pl-2" href="#">บทความ</b-nav-item>
              <b-nav-item class="pl-2" href="#">ติดต่อเรา</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="">
              <div>
                <b-button
                  href="#"
                  target="blank"
                  variant="light"
                  class="btn btn-purple"
                  >เข้าสู่ระบบ</b-button
                >
              </div>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
    <Nuxt />
    <section id="footer">
      <div class="jumbotron text-center" style="margin-bottom: 0">
        <!-- <p>Footer</p> -->
        <img src="~/assets/imgs/head-unii.png" alt="" />
        <p class="mt-3" style="color: white">Connect with us on</p>
        <a
          href="https://www.facebook.com/Unii.co.th"
          target="blank"
          style="color: white"
          ><i class="fab fa-facebook"></i
        ></a>
        <!-- <a
          href="https://twitter.com/unii60868578"
          target="blank"
          style="color: white"
          ><i class="fab fa-twitter mx-3"></i
        ></a> -->
        <a
          href="https://www.youtube.com/channel/UCpmnNygcabMF-KReKDXY56w"
          target="blank"
          style="color: white"
          ><i class="fab fa-youtube"></i
        ></a>
        <p class="mt-3" style="color: white">
          Copyright&copy; 2020 Unii Online
        </p>
      </div>
    </section>
  </div>
</template>

<style>
.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}
.jumbotron {
  background-color: black;
}
.custom-toggler.navbar-toggler {
  border-color: rgb(128, 128, 128);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(128,128,128)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.btn-purple {
  color: white;
  background-color: #69197b;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-bottom: 3px solid transparent;
}

.topnav a:hover {
  border-bottom: 3px solid #69197b;
}

.topnav a.active {
  border-bottom: 3px solid #69197b;
}
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
