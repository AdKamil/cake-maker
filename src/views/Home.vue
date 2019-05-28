<template>
  <div>
    <v-container class="pb-5 main-container1">
      <v-layout class="main-section1" row wrap>
        <v-flex xs12 class="text-center ">
          <h1 class="text-xs-center">Zamów tort o kadej porze</h1>
        </v-flex>
        <v-flex xs12 class="mt-3 main-section1__button-wrapper">
          <v-btn
            round
            color="white"
            class="mx-auto main-section1__button"
            @click="createCake"
          >skomponuj swój tort</v-btn>
        </v-flex>
        <v-flex xs12 class="main-section1__img-wrapper">
          <img
            class="mx-auto main-section1__img"
            src="/img/main-cake.png"
          />
        </v-flex>
      </v-layout>
      <v-layout class="main-section2" row wrap justify-center mt-5>
        <v-flex xs12 md10 lg8>
          <h2>O teletortach</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="main-container2">
      <v-layout row wrap mt-4 class="main-section2">
        <v-flex xs12 md6 pa-4>
          <v-layout row wrap>
            <v-flex xs12>
              <h1 class="main-section2__title">torty to nasza pasja</h1>
              <p class="main-section2__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
            </v-flex>
            <v-flex xs12 class="mt-4 main-section3__img-wrapper">
              <img
                src="/img/main-image3.png"
                class="main-section2__img"
                alt="Michaś teletorty">
            </v-flex>
            <v-flex xs12 class="mt-4 main-section3__img-wrapper">
              <img
                src="/img/main-image2.png"
                class="main-section2__img"
                alt="Michaś teletorty">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md6 pa-4>
          <v-layout row wrap>
            <v-flex xs12 class="main-section3__img-wrapper">
              <img
                src="/img/main-image5.png"
                class="mt-4 main-section2__img"
                alt="Michaś teletorty">
            </v-flex>
            <v-flex xs12 class="mt-4 main-section3__img-wrapper">
              <img
                src="/img/main-image4.png"
                class="main-section2__img"
                alt="Michaś teletorty">
            </v-flex>
            <v-flex xs12 class="mt-4 main-section3__img-wrapper">
              <img
                src="/img/main-image1.png"
                class="main-section2__img"
                alt="Michaś teletorty">
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-flex xs12 class="mt-3 pb-5 main-section3__button-wrapper">
        <v-btn
          round
          color="white"
          class="mx-auto main-section3__button"
          @click="createCake"
        >skomponuj swój tort</v-btn>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    createCake() {
      this.$router.push({
        path: '/create-cake',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container1 {
  min-height: 100vh;
}

.main-section1 {

  &__button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &__button {
    color: #e19ba2;
  }

  &__img-wrapper {
    display: flex;
    flex-direction: column;
    max-height: 45vh;
    justify-content: center;
    margin-top: 50px;
  }

  &__img {
    height: 100%;
    width: auto;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
}

.main-container2 {
  background-color: #fff;
}

.main-section2 {

  &__img {
    width: 100%;
    height: auto;
  }

  &__title {
    color: #e19ba2;
  }

  &__paragraph {
    color:#B3C4D3
  }
}

.main-section3 {
  &__button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &__button {
    color: #e19ba2;
  }
}
</style>
