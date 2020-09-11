import Vue from 'vue';
import { Icon, Field } from 'vant';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Icon).use(Field)

/* eslint-disable no-new */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
