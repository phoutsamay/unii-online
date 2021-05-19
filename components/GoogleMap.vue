<template>
  <div>
    <br />
    <gmap-map
      :center="{ lat: 13.736717, lng: 100.523186 }"
      :zoom="5"
      style="width: 100%; height: 400px"
    >
      <gmap-marker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :icon="m.icon"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  // eslint-disable-next-line vue/require-prop-types
  props: ['items'],
  data() {
    return {
      // center: { lat: 0, lng: 0 },
      markers: [],
      places: [],
      currentPlace: null,
    }
  },

  async mounted() {
    await this.addMarker()
  },

  methods: {
    async addMarker() {
      if (this.items.length > 0) {
        this.items.map(async (pin) => {
          const marker = {
            lat: pin.lat,
            lng: pin.lng,
            authorized: pin.authorized,
          }
          if (marker.authorized === true) {
            await this.markers.push({
              position: marker,
              icon: {
                url: require('../assets/imgs/googlemap/Authorized_pin.svg'),
                scaledSize: { width: 32, height: 32 },
              },
            })
          } else
            await this.markers.push({
              position: marker,
              icon: {
                url: require('../assets/imgs/googlemap/pin.svg'),
                scaledSize: { width: 32, height: 32 },
              },
            })
          this.center = marker
        })
      } else {
        const marker = {
          lat: this.items.lat,
          lng: this.items.lng,
          authorized: this.items.authorized,
        }
        if (marker.authorized === true) {
          await this.markers.push({
            position: marker,
            icon: {
              url: require('../assets/imgs/googlemap/Authorized_pin.svg'),
              scaledSize: { width: 32, height: 32 },
            },
          })
        } else
          await this.markers.push({
            position: marker,
            icon: {
              url: require('../assets/imgs/googlemap/pin.svg'),
              scaledSize: { width: 32, height: 32 },
            },
          })
        this.center = marker
      }
    },
  },
}
</script>

<style></style>
