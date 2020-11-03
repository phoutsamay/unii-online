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
