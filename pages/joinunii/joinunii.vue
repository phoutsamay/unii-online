<template>
  <div class="container">
    <div class="mx-5 my-5">
      <b-card
        class="bg bg-custom-purple"
        text-variant="white"
        title="ตำแหน่งที่เปิดรับสมัคร"
      >
      </b-card>
    </div>
    <div
      v-for="(joinunii, index) in joinuniis"
      v-show="joinunii.status"
      :key="index"
      class="accordion mx-5 my-5"
      role="tablist"
    >
      <b-card style="border: none" no-body class="mb-1 shadow-sm">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            v-b-toggle.accordion-1
            block
            class="text-left p-4 btn dropdown-toggle"
            variant="outline-info"
            size="lg"
            >{{ joinunii.title }}</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card
              :img-src="`https://api.unii.co.th/api/uploads/${joinunii.image}`"
              alt=""
              img-alt="Card image"
              img-top
              style="border: none"
            >
              <b-card-text><b>คุณสมบัติ</b></b-card-text>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <b-card-text v-html="joinunii.qualification"> </b-card-text>
              <!-- <b-card-text
                >- อายุไม่เกิน 50 ปี <br />
                - มือโทรศัพท์มือถือ (Smartphone) <br />
                - มีรถปิกอัพคอก หรือรถบรรทกเล็ก <br />
                - สามารถทำงานทั้ง Online c]r Offline<br />
                - เพศ ชาย/หญิง อายุ 25 ปีขึ้นไป</b-card-text
              > -->
              <a :href="joinunii.linkbtn" target="_blank"
                ><b-button class="btn btn-custom-purple">สมัคร</b-button></a
              >

              <!-- <b-card-text>{{ text }}</b-card-text> -->
            </b-card>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joinuniis: [],
    }
  },
  mounted() {
    this.getJoinunii()
  },
  methods: {
    async getJoinunii() {
      await this.$axios
        .$get('/api/joinuniis')
        .then((res) => {
          // console.log('zz', res.data)
          this.joinuniis = res.data
          // console.log('logJoinunii', this.joinuniis)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // this.joinuniis = data
    },
  },
}
</script>
<style>
.btn-custom-purple {
  background: transparent linear-gradient(180deg, #993a96 0%, #69197b 100%) 0%
    0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  padding: 10px 50px 10px 50px;
}
.bg-custom-purple {
  background: #993a96;
  border: 1px solid #707070;
  opacity: 1;
}
</style>
