<template>
  <v-layout row wrap mb-5>
    <v-flex
      xs6
      md4
      pa-2
      v-for="(occasion, index) in occasions"
      :key="index"
      @click="chooseOccasion(occasion.slug)"
    >
      <v-hover>
        <v-card
          class="card card--clickable"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
        >
          <v-img
            :src="`/img/occasions/${occasion.img}`"
            class="grey lighten-2"
            aspect-ratio="1.2"
            :alt="`torty na ${occasion.name}`"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
          <v-card-title>
            <h3 class="occasion__title">{{ occasion.name }}</h3>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'occasions',
      'cakes',
    ]),
  },
  data() {
    return {
    };
  },
  methods: {
    chooseOccasion(slug) {
      this.$router.push(`/create-cake/${slug}`);
    },
  },
  beforeCreate() {
    this.$store.commit('setConfigurationTitle', 'Wybierz okazję');
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
.occasion {
  &__title {
    color: #333;
  }
}
</style>
