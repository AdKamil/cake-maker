<template>
  <v-container>
    <v-layout row wrap justify-space-between pt-3 mb-5>
      <v-flex xs12 md7 pa-2 pb-5>
        <h2>Twoje zamówienie</h2>
        <v-card class="mt-5">
          <v-list two-line>
            <v-list-tile
              avatar
            >
              <v-list-tile-avatar>
                <img :src="`/img/cakes/${configuredCake.cake.img}`">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-sub-title>Tort</v-list-tile-sub-title>
                <v-list-tile-title v-html="configuredCake.cake.name"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile
              avatar
            >
              <v-list-tile-avatar>
                <img :src="`/img/tastes/${configuredCake.taste.img}`">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-sub-title>Smak</v-list-tile-sub-title>
                <v-list-tile-title v-html="configuredCake.taste.name"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile
              avatar
            >
              <v-list-tile-avatar>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-sub-title>Waga</v-list-tile-sub-title>
                <v-list-tile-title >{{ configuredCake.weight }} kg</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile
              avatar
            >
              <v-list-tile-avatar>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-sub-title>adres dostawy</v-list-tile-sub-title>
                <v-list-tile-title >{{ configuredCake.location.address }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
        <v-card class="mt-2">
          <v-list two-line>
            <v-list-tile
              avatar
            >
              <v-list-tile-avatar>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-sub-title>Cena lacznie</v-list-tile-sub-title>
                <v-list-tile-title>{{ configuredCake.price.toFixed(2) }} PLN</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 md5 pa-2>
        <h2>Wybierz datę</h2>
        <p> minimalny czas wynosi {{ blockedDays}} dni</p>
        <v-date-picker
          v-model="date"
          locale="pl-pl"
          class="mt-3"
          width="100%"
          :min="blockedDate"
        ></v-date-picker>
        <v-btn
          class="ml-0"
          @click="snackbar = true">przejdź do platności</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :timeout="5000"
    >
      Modul platności będzie zrealizowany w finalnej wersji systemu
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      blockedDays: 4,
      snackbar: false,
    };
  },
  computed: {
    configuredCake() {
      return this.$store.getters.configuredCake;
    },
    blockedDate() {
      const today = new Date();
      const requiredDate = new Date(
        today.getFullYear(), today.getMonth(), today.getDate() + this.blockedDays,
      );
      return requiredDate.toISOString();
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  &__title {
    color: #333;
  }
}
</style>
