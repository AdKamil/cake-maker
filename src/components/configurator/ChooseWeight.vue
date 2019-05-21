<template>
  <v-layout row wrap mb-5 justify-center align-center>
    <v-flex
      xs12
      md4
      pa-2
    >
      <v-hover>
        <v-card>
          <v-img
            :src="`/img/occasions/wedding.jpg`"
            class="grey lighten-2"
            aspect-ratio="1.5"
            :alt="`waga tortu`"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
          <v-card-title class="pa-4">
            <div class="weight">
              <h3
                class="pb-5 weight__title"
              >Waga: {{ weight }} kg (ok. {{ numberOfPersons }} osób)
              </h3>
              <v-slider
                v-model="weight"
                :min="2"
                :max="8"
                :step=".5"
                always-dirty
                thumb-label="always"
              ></v-slider>
              <div class="weight__button-container">
                <v-btn @click="chooseWeight" flat color="primary ml-auto">WYBIERZ</v-btn>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      weight: 2,
    };
  },
  computed: {
    numberOfPersons() {
      return this.weight * 4;
    },
  },
  methods: {
    chooseWeight() {
      this.$router.push({
        name: 'choosePlace',
      });
    },
  },
  beforeCreate() {
    this.$store.commit('setConfigurationTitle', 'Wybierz wagę');
  },
};
</script>

<style lang="scss" scoped>
.weight {
  width: 100%;

  &__title {
    color: #333;
  }

  &__button-container {
    display: flex;
  }
}
</style>
