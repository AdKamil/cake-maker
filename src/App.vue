<template>
  <v-app class="main-wrapper">
    <v-content>
      <div class="nav">
        <router-link class="nav__logo" to="/">
          <h1>teletorty</h1>
        </router-link>
        <v-btn
          flat
          icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        >
          <v-icon light color="#fff">fas fa-bars</v-icon>
        </v-btn>

        <div class="hidden-sm-and-down">
          <ul>
            <li>
              <router-link
                v-for="(navLink, index) in navLinks"
                :key="index"
                :to="navLink.path">{{ navLink.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <v-navigation-drawer
        v-model="drawer"
        temporary
        absolute
        class="nav-drawer"
      >
        <v-list dense class="pt-0 nav-drawer__list">
          <v-list-tile
            v-for="(navLink, index) in navLinks"
            :key="index"
            :to="navLink.path"
          >
            <!-- <v-list-tile-action>
              <v-icon>I</v-icon>
            </v-list-tile-action> -->

            <v-list-tile-content>
              <v-list-tile-title
                class="nav-drawer__list-title"
              >{{ navLink.title }}
            </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      navLinks: [
        { title: 'home', path: '/' },
        { title: 'create cake', path: '/create-cake' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lobster');
@import url('https://fonts.googleapis.com/css?family=Montserrat');

h1 {
  font-family: 'Lobster', serif;
  color: #fff;
}

h3, h4, h5, p, span {
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}

#app {
  background: linear-gradient(
    to right,
  rgba(233,191,198,1) 0%,
  rgba(233,191,198,1) 23%,
  rgba(225,155,162,1) 100%);
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 15px;
  height: 50px;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  &__logo {
    text-decoration: none;
    color: #fff;
  }
}

.nav-drawer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &__list-title {
    text-align: right;
    font-size: 18px;
  }
}
</style>
