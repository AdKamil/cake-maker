<template>
  <v-layout row wrap mb-5>
    <v-flex
      xs6
      pa-2
      v-for="(cake, index) in cakesFiltered"
      :key="index">
      <v-card>
        <v-img
          :src="`/img/cakes/${cake.img}`"
          class="grey lighten-2 occasion-img"
          aspect-ratio="1.2"
          :alt="`torty na ${cake.name}`"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
        <v-card-title>
          <h3 class="occasion__title">{{ cake.name }}</h3>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'cakes',
    ]),
  },
  data() {
    return {
      cakesFiltered: [],
    };
  },
  methods: {
    filterCakes() {
      for (let i = 0; i < this.cakes.length; i += 1) {
        if (this.$route.path.split('/')[2] === this.cakes[i].cat) {
          this.cakesFiltered.push(this.cakes[i]);
        }
      }
    },
  },
  mounted() {
    this.filterCakes();
  },
};
</script>

<style lang="scss" scoped>
.occasion {
  &__title {
    color: #000;
  }
  &__img {
    height: 100px;
  }
}
</style>
