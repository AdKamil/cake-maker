import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import _ from './plugins/lodash';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(_);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
