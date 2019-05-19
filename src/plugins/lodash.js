import lodash from 'lodash';

export default {
  install: Vue => Object.defineProperty(Vue.prototype, '_', { value: lodash }),
};
