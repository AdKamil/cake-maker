<template>
  <v-layout row wrap mb-5>
    <v-flex
      xs6
      md4
      pa-2
      v-for="(taste, index) in currentTastes"
      :key="index">
      <v-hover>
        <v-card
          class="card card--clickable"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          @click="chooseTaste(taste.id, taste.pricePerTaste)"
        >
          <v-img
            :src="`/img/tastes/${taste.img}`"
            class="grey lighten-2"
            aspect-ratio="1.2"
            :alt="`torty na ${taste.name}`"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
          <v-card-title>
            <h3 class="taste__title">{{ taste.name }}</h3>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentTastesIds: [],
      currentTastes: [],
    };
  },
  computed: {
    ...mapGetters([
      'tastes',
      'cakes',
    ]),
  },
  methods: {
    getCurrentTastesIds() {
      const cakeId = parseInt(this.$route.params.id, 10);
      let temp;
      for (let i = 0; i < Object.keys(this.cakes).length; i += 1) {
        if (this.cakes[i].id === cakeId) {
          temp = this.cakes[i].tastes;
        }
      }
      this.currentTastesIds = temp;
    },
    getCurrentTastes() {
      const tempTastes = [];
      for (let i = 0; i < Object.keys(this.tastes).length; i += 1) {
        this.currentTastesIds.map((id) => {
          if (this.tastes[i].id === id) {
            tempTastes.push(this.tastes[i]);
          }
          return id;
        });
      }
      this.currentTastes = tempTastes;
    },
    chooseTaste(taste, price) {
      this.$store.commit('setPriceByTaste', price);
      this.$router.push({
        name: 'choosePlace',
        params: {
          taste,
        },
      });
    },
  },
  created() {
    this.getCurrentTastesIds();
    this.getCurrentTastes();
  },
  beforeCreate() {
    this.$store.commit('setConfigurationTitle', 'Wybierz smak');
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

.taste {
  &__title {
    color: #333;
  }
}
</style>
