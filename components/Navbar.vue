<template>
  <div id="navbar" class="sticky-top shadow-sm">
    <b-navbar toggleable="lg" type="light" variant="white">
      <div class="container">
        <b-navbar-brand href="/"
          ><img src="../assets/imgs/logo.png" alt=""
        /></b-navbar-brand>

        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

        <div>
          <b-navbar-toggle
            v-b-toggle.sidebar-right
            target="nav-collapse"
          ></b-navbar-toggle>
          <!-- <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button> -->
          <b-sidebar id="sidebar-right" target="nav-collapse" right shadow>
            <div class="p-3">
              <nav class="mb-3">
                <b-navbar-nav vertical>
                  <b-nav-item href="/">หน้าแรก</b-nav-item>
                  <b-nav-item href="#service">บริการของเรา</b-nav-item>
                  <b-nav-item href="#about">เกี่ยวกับเรา</b-nav-item>
                  <b-nav-item href="#video">วีดีโอ</b-nav-item>
                  <b-nav-item href="#blog">บทความ</b-nav-item>
                  <b-nav-item href="#">ร่วมงานกับ Unii</b-nav-item>
                  <b-nav-item href="/uniis/unii">ค้นหา Unii Team</b-nav-item>
                  <b-nav-item href="#footer">ติดต่อเรา</b-nav-item>
                </b-navbar-nav>
                <hr />
                <b-button
                  size="sm"
                  class="btn btn-purple my-2 my-sm-0"
                  type="submit"
                  >เข้าสู่ระบบ</b-button
                >
              </nav>
            </div>
          </b-sidebar>
        </div>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto topnav">
            <b-nav-item class="px-2" href="/">หน้าแรก</b-nav-item>
            <b-nav-item class="px-2" href="#service">บริการของเรา</b-nav-item>
            <b-nav-item class="px-2" href="#about">เกี่ยวกับเรา</b-nav-item>
            <b-nav-item class="px-2" href="#video">วีดีโอ</b-nav-item>
            <b-nav-item class="px-2" href="#blog">บทความ</b-nav-item>
            <b-nav-item class="px-2" href="/joinunii/joinunii"
              >ร่วมงานกับ Unii</b-nav-item
            >
            <b-nav-item class="px-2" href="/uniis/unii"
              >ค้นหา Unii Team</b-nav-item
            >
            <b-nav-item class="px-2" href="#footer">ติดต่อเรา</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-button
                size="sm"
                class="btn btn-purple my-2 my-sm-0"
                type="submit"
                >เข้าสู่ระบบ</b-button
              >
            </b-nav-form> -->
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style>
#navbar .btn-purple {
  background: transparent linear-gradient(180deg, #993a96 0%, #69197b 100%) 0%
    0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border: none;
  padding: 5px 10px;
}
</style>
