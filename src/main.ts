import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

import App from './App.vue';
import router from './router';
import store from './store';


Vue.use(Swipe).use(SwipeItem)

/* eslint-disable no-new */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
