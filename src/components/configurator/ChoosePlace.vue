<template>
  <v-layout row wrap mb-5 justify-center align-center>
    <v-flex
      xs6
      md4
      pa-2
    >
      <v-card>
        <MglMap
          :accessToken="mapboxAccessToken"
          :center="coordinates"
          :mapStyle.sync="mapStyle"
        >
          <MglMarker :coordinates="coordinates" color="blue" />
        </MglMap>
        <v-card-title class="pa-4">
          <div class="weight">
            <div class="weight__button-container">
              <v-btn flat color="primary ml-auto">WYBIERZ</v-btn>
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox';
import Mapbox from 'mapbox-gl';

export default {
  components: {
    MglMap,
    MglMarker,
  },
  data() {
    return {
      mapboxAccessToken: 'pk.eyJ1IjoiYWR2ZXJ0aWQiLCJhIjoiY2p2djd4c2Y2MDk1bzQ4cW52djg3NHduZSJ9.Xqk-MDJrx8cj6iqKYZiQEg',
      coordinates: [50.8165146, 19.1232693],
      mapStyle: 'mapbox://styles/mapbox/basic-v10',
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>

<style>

</style>
