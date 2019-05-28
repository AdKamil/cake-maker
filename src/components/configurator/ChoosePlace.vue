<template>
  <v-layout row wrap mb-5>
    <v-flex xs12 md8 pa-2 pb-5>
      <v-card>
        <MglMap
          :accessToken="mapboxAccessToken"
          :center="centerCoordinates"
          :mapStyle.sync="mapStyle"
          :zoom="zoom"
          class="map"
        >
          <MglMarker
            v-for="location in locations"
            :key="location.id"
            :coordinates="location.marker"
            color="#e19ba2"
            anchor="bottom"
            @click="select(location.id)"
          />
        </MglMap>
      </v-card>
    </v-flex>
    <v-flex xs12 md4 pa-2>
      <v-card>
        <template v-for="location in locations">
          <v-hover :key="location.id">
            <v-list-tile
              avatar
              ripple
              @click="select(location)"
              slot-scope="{ hover }"
              class="list-item"
              :class="`${hover || selected.id === location.id ? 'hover' : ''}`"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ location.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ location.address }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-hover>
          <v-divider v-if="location.id < locations.length" :key="location.address"></v-divider>
        </template>
      </v-card>
      <v-btn @click="choosePlace">Wybierz</v-btn>
    </v-flex>
    <v-snackbar
      v-if="$vuetify.breakpoint.mdAndDown"
      v-model="snackbar"
      :timeout="10000"
    >
      Wybrales: {{ snackbarAdress }}
      <v-btn
        dark
        flat
        @click="choosePlace"
      >
        wybierz datę
      </v-btn>
    </v-snackbar>
    <v-snackbar
      v-else
      v-model="snackbar"
      :timeout="5000"
    >
      Wybrales: {{ snackbarAdress }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        zamknij
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox';

export default {
  components: {
    MglMap,
    MglMarker,
  },
  data() {
    return {
      mapboxAccessToken:
        'pk.eyJ1IjoiYWR2ZXJ0aWQiLCJhIjoiY2p2djd4c2Y2MDk1bzQ4cW52djg3NHduZSJ9.Xqk-MDJrx8cj6iqKYZiQEg',
      centerCoordinates: [19.1156691, 50.8100666],
      mapStyle: 'mapbox://styles/mapbox/streets-v10',
      selected: {},
      zoom: 11,
      snackbar: false,
      snackbarAdress: '',
    };
  },
  computed: {
    locations() {
      return this.$store.getters.locations;
    },
  },
  methods: {
    setTitle() {
      const locationsNumber = this.locations.length;
      this.$store.commit(
        'setConfigurationTitle',
        `Wybierz jeden z ${locationsNumber} punktów odbioru`,
      );
    },
    select(selected) {
      this.selected = selected;
      // const selectedLocation = this._.find(this.locations, { id });
      this.centerCoordinates = selected.marker;
      this.zoom = 12;
      this.snackbarAdress = selected.address;
      this.snackbar = true;
    },
    choosePlace() {
      this.$store.commit('setLocation', this.selected);
      this.$router.push({
        name: 'chooseDate',
      });
    },
  },
  created() {
    this.setTitle();
  },
};
</script>

<style lang="scss" scoped>
.map {
  height: 500px;
  width: 100%;
}

.list-item {
  &.hover {
    background: rgba(0,0,0,0.08);
  }
}
</style>
