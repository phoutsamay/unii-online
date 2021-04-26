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
                  ดูข้อมูล
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
          key: 'type',
          label: 'ตำแหน่ง',
          sortable: false,
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
