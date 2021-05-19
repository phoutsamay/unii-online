<template>
  <div>
    <div class="bg-img"></div>
    <div class="centered"><h1>OUR TEAM</h1></div>
    <div class="container mb-5">
      <b-card>
        <b-modal v-model="show" size="lg">
          <div class="pl-4">
            <p>{{ selected.uniiId }}</p>
            <h5>{{ selected.name }}</h5>
            <p>{{ selected.address }}</p>
            <p>{{ selected.tel }}</p>
            <b-avatar
              rounded
              :src="`${$axios.defaults.baseURL}/api/uploads/${selected.image}`"
              size="12rem"
            ></b-avatar>
          </div>

          <div class="mapstyle">
            <GoogleMap :items="selected"> </GoogleMap>
          </div>
        </b-modal>
        <template #header>
          <div class="card-header">
            <h4>ตัวแทนที่ได้รับการแต่งตั้ง Authorized Unii Center</h4>
          </div>
        </template>
        <b-form inline>
          <div>
            <b-form-select
              v-model="uniitypeselected"
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0 mx-4"
              :options="uniitypeoptions"
            ></b-form-select>
          </div>

          <div>
            <b-form-select
              v-model="cityselected"
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0 mx-4"
              :options="cityoptions"
            ></b-form-select>
          </div>

          <div>
            <b-form-input
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0 mx-4"
              type="search"
              placeholder="พิมพ์คำค้นหา เช่น สถานที่อยู่ เขต รหัสไปรษณีย์"
              aria-label="Search"
            ></b-form-input>
          </div>

          <div>
            <b-button href="#" size="sm" class="btn btn-purple" type="submit"
              >ค้นหา</b-button
            >
          </div>
        </b-form>

        <b-card-body>
          <div v-if="uniis.length > 0">
            <GoogleMap :items="uniis"> </GoogleMap>
          </div>
        </b-card-body>

        <div>
          <b-table sticky-header hover :items="uniis" :fields="fields">
            <template #cell(authorized)="row">
              <div>
                <b-img
                  v-if="row.item.authorized"
                  center
                  src="../../assets/imgs/authorized/Authorized.svg"
                  alt="Center image"
                  width="50"
                ></b-img>
              </div>
            </template>
            <template #cell(actions)="row">
              <b-link size="sm" @click="sendInfo(row.item)"> ดูข้อมูล </b-link>
            </template>
          </b-table>
        </div>
      </b-card>
    </div>
    <!-- <div class="bg-img"></div>
    <div class="centered"><h1>OUR TEAM</h1></div>
    <div class="container">
      <div class="card">
        <b-modal id="myModal" size="lg">
          <h5>{{ selected.name }}</h5>
          <p>{{ selected.address }}</p>
          <div class="mapstyle">
            <GoogleMap :items="selected"> </GoogleMap>
          </div>
        </b-modal>

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
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      uniitypeselected: null,
      uniitypeoptions: [
        { value: null, text: 'ประเภททั้งหมด' },
        { value: 'UMT', text: 'UMT' },
        { value: 'UT', text: 'UT' },
        { value: 'Authorized UNII Center', text: 'Authorized UNII Center' },
      ],
      cityselected: null,
      cityoptions: [
        { value: null, text: 'เลือกจังหวัด' },
        { value: 'BKK', text: 'BKK' },
        { value: 'UT', text: 'UT' },
        { value: 'Authorized UNII Center', text: 'Authorized UNII Center' },
      ],
      uniis: [],
      selected: '',
      show: false,
      fields: [
        {
          key: 'type',
          label: 'ตำแหน่ง',
          sortable: true,
        },
        {
          key: 'name',
          label: 'ชื่อ',
          sortable: false,
        },
        {
          key: 'address',
          label: 'สาขา/ที่ตั้ง',
          sortable: false,
        },
        {
          key: 'tel',
          label: 'เบอร์โทรศัพท์',
          sortable: false,
        },
        {
          key: 'authorized',
          label: 'authorized',
          sortable: true,
        },
        {
          key: 'actions',
          label: 'แผนที่',
        },
      ],
    }
  },
  mounted() {
    this.getUnii()
  },
  methods: {
    async getUnii() {
      await this.$axios
        .$get('/api/uniis')
        .then((res) => {
          // console.log('zz', res.data)
          this.uniis = res.data
          // console.log('logUnii', this.uniis)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    sendInfo(item) {
      this.selected = item
      this.show = true
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
/* .card {
  margin: 20px;
  margin-top: -170px;
  height: 60em;
  border: none;
} */
.card {
  margin-top: -150px;
}
.card-header {
  background-color: #993a96;
  padding: 20px;
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
  background-image: url('../../assets/imgs/bgunii.jpg');

  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
}
</style>
