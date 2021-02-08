import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'AIzaSyCnVnq-7yCyCV5kYSHbAPwqhkYCTEt2FZQ',
    libraries: 'places', // This is required if you use the Auto complete plug-in
  },
})
