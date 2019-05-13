<template>
  <div>
    <v-container fluid>
      <v-layout>
        <v-flex class="header">
          <h2 class="header__title">Wybierz okoliczność</h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout px-2>
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
