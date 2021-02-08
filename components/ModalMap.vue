<template>
  <div>
    <b-modal id="myModal" size="lg">
      <p>{{ selected.name }}</p>
      <p>{{ selected.address }}</p>
      <div class="mapstyle">
        <GoogleMap :items="items"> </GoogleMap>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      items: [
        {
          id: 1,
          name: 'UMT 20',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.818404,
          LocationLng: 100.54823,
        },
        {
          id: 2,
          name: 'UMT 19',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.818477,
          LocationLng: 100.547758,
        },
        {
          id: 3,
          name: 'UMT 8',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.81855,
          LocationLng: 100.545234,
        },
        {
          id: 4,
          name: 'UMT 7',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.819165,
          LocationLng: 100.540127,
        },
        {
          id: 5,
          name: 'UMT 1',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.822238,
          LocationLng: 100.541844,
        },
        {
          id: 6,
          name: 'UMT 2',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.819123,
          LocationLng: 100.543485,
        },
        {
          id: 7,
          name: 'UMT 3',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.817196,
          LocationLng: 100.544622,
        },
        {
          id: 8,
          name: 'UMT 4',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.814393,
          LocationLng: 100.540094,
        },
        {
          id: 9,
          name: 'UMT 5',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.816258,
          LocationLng: 100.537701,
        },
        {
          id: 10,
          name: 'UMT 6',
          address: '30/2 หมู่ที่ 2 ตำบลตะคร้ำเอน อำเภอท่ามะกา กาญจนบุรี 71130',
          tel: '099-9999999',
          LocationLat: 13.817039,
          LocationLng: 100.535228,
        },
      ],
    }
  },
}
</script>

<style>
.mapstyle {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
