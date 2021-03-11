<template>
  <div>
    <div class="bg-img"></div>
    <div class="centered"><h1>OUR TEAM</h1></div>
    <div class="container">
      <b-card>
        <b-modal v-model="show" size="lg">
          <p>{{ selected._id }}</p>
          <h5>{{ selected.name }}</h5>
          <p>{{ selected.address }}</p>
          <p>Contact: 099999999</p>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div class="mapstyle">
            <GoogleMap :items="selected"> </GoogleMap>
          </div>
        </b-modal>
        <template #header>
          <div class="card-header">
            <h4>ค้นหาสาขาและจุดบริการยูนี่</h4>
          </div>
        </template>

        <b-card-body>
          <div v-if="uniis.length > 0">
            <GoogleMap :items="uniis"> </GoogleMap>
          </div>
        </b-card-body>

        <b-card-text>
          <div>
            <b-table sticky-header hover :items="uniis" :fields="fields">
              <template #cell(actions)="row">
                <b-link size="sm" @click="sendInfo(row.item)">
                  ดูแผนที่
                </b-link>
              </template>
            </b-table>
          </div>
        </b-card-text>
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
      uniis: [],
      selected: '',
      show: false,
      fields: [
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
  background-image: url('../../assets/imgs/Header.jpg');

  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
}
</style>
