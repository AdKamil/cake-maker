<template>
  <div class="create-cake">
    <v-container fluid>
      <v-layout>
        <v-flex class="header">
          <h1 class="header__title">{{ configuratorTitle }}</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout px-2 fill-height>
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-layout>
  </div>
</template>

<script>

export default {
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  computed: {
    configuratorTitle() {
      return this.$store.getters.configuratorTitle;
    },
  },
  methods: {
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    next();
  },
};
</script>

<style lang="scss" scoped>
.create-cake {
  height: 100%;
}
.header {
  &__title {
    text-align: center;
  }
}

//transitions
.slide-left-enter-active, .slide-left-leave-active {
  transition: all .25s cubic-bezier(0.4, 0.0, 0.2, 1);
}
.slide-right-enter-active, .slide-right-leave-active {
  transition: all .25s cubic-bezier(0.4, 0.0, 0.2, 1);
 }
.slide-left-enter, .slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-enter, .slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

@keyframes slide-away {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(-50%);
    opacity: .5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
