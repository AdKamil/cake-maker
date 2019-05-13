import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/create-cake',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CreateCake.vue'),

      children: [
        {
          path: '',
          name: 'chooseOccasion',
          component: () => import('./components/configurator/ChooseOccasion.vue'),
        },
        {
          path: '/create-cake/:cat',
          name: 'chooseCake',
          component: () => import('./components/configurator/ChooseCake.vue'),
        },
      ],
    },
  ],
});
