<template>
  <v-layout row wrap mb-5>
    <v-flex
      xs6
      md4
      pa-2
      v-for="(cake, index) in cakesFiltered"
      @click="chooseCake(cake.id)"
      :key="index">
      <v-hover>
        <v-card
          class="card card--clickable"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
        >
          <v-img
            :src="`/img/cakes/${cake.img}`"
            class="grey lighten-2"
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
            <h3 class="cake__title">{{ cake.name }}</h3>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    cakes() {
      return this.$store.getters.cakes;
    },
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
    chooseCake(cakeId) {
      const currentOccasion = this.$route.params.cat;
      this.$router.push({
        name: 'chooseTaste',
        params: {
          id: cakeId,
          cat: currentOccasion,
        },
      });
    },
  },
  mounted() {
    this.filterCakes();
  },
  beforeCreate() {
    this.$store.commit('setConfigurationTitle', 'Wybierz tort');
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;

  &--clickable {
    cursor: pointer;
  }
}
.cake {
  &__title {
    color: #333;
  }
}
</style>
