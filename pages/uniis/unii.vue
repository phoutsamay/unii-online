<template>
  <div>
    <div class="bg-img"></div>
    <div class="centered"><h1>OUR TEAM</h1></div>
    <div class="container">
      <div class="card">
        <!-- <ModalMap /> -->
        <!-- Modal -->
        <b-modal id="myModal" size="lg">
          <h5>{{ selected.name }}</h5>
          <p>{{ selected.address }}</p>
          <div class="mapstyle">
            <GoogleMap :items="selected"> </GoogleMap>
          </div>
        </b-modal>
        <!-- End Modal -->
        <div class="card-header">
          <h4>ค้นหาสาขาและจุดบริการยูนี่</h4>
        </div>

        <form class="form-inline mt-3 mx-auto">
          <select class="form-control mx-3">
            <option>ประเภททั้งหมด</option>
            <option>UMT</option>
            <option>UC</option>
            <option>UMC</option>
          </select>

          <select class="form-control mx-3">
            <option>เลือกจังหวัด</option>
            <option>จังหวัด1</option>
            <option>จังหวัด2</option>
            <option>จังหวัด3</option>
          </select>

          <select class="form-control mx-3">
            <option>เขต/อำเภอ</option>
            <option>เขต/อำเภอ1</option>
            <option>เขต/อำเภอ2</option>
            <option>เขต/อำเภอ3</option>
          </select>

          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="ระบุคำค้นหา"
            aria-label="Search"
          />
          <b-button href="#" size="sm" class="btn btn-purple" type="submit"
            >ค้นหา</b-button
          >
        </form>

        <div class="mapstyle">
          <GoogleMap :items="uniis"> </GoogleMap>
        </div>

        <!-- <img
          src="../../assets/imgs/1Why-Create-GoogleMaps-Listing-TH-1.jpg"
          alt=""
        /> -->
        <div class="card-body overflow-auto">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">สาขา/ที่ตั้ง</th>
                <th scope="col">เบอร์โทรศัพท์</th>
                <th scope="col">แผนที่</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in uniis" :key="item.id">
                <td>
                  <h5>{{ item.name }}</h5>
                  <p>{{ item.address }}</p>
                </td>
                <td>{{ item.tel }}</td>
                <td>
                  <!-- <a v-b-modal.modal-1>ดูแผนที่</a> -->
                  <b-link
                    v-b-modal="'myModal'"
                    size="sm"
                    user="'item'"
                    @click="sendInfo(item)"
                  >
                    ดูแผนที่
                  </b-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async fetch() {
  //   this.uniis = await this.$axios.$get('/api/uniis')
  // },
  data() {
    return {
      uniis: [],
      selected: '',
    }
  },
  created() {
    this.$axios.get('/api/uniis').then((res) => {
      this.uniis = res.data
    })
  },
  methods: {
    sendInfo(item) {
      this.selected = item
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Prompt', sans-serif;
  background-color: #f2f2f2;
}
.mapstyle {
  padding-left: 20px;
  padding-right: 20px;
}
.card {
  margin: 20px;
  margin-top: -170px;
  height: 60em;
  border: none;
}
.card-header {
  background-color: #993a96;
  padding: 30px;
}
thead {
  color: #993a96;
}
h1 {
  color: #ffffff;
}
h5 {
  color: #69197b;
  font-weight: 700;
}
.centered {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-purple {
  background: transparent linear-gradient(180deg, #993a96 0%, #69197b 100%) 0%
    0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border: none;
  padding: 10px 40px;
}
h4 {
  color: #ffffff;
}

.bg-img {
  /* The image used */
  background-image: url('../../assets/imgs/Header.jpg');

  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
}
</style>
