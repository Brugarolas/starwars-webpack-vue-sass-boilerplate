import Vue from 'vue';
import VueRouter from 'vue-router';
import SharedMemory from '@/js/utils/vue-shared';
import App from '@/js/App';
import { BASE_URL } from '@/js/constants';
import store from '@/js/store';
import routes from '@/js/routes';
import { populateStore } from '@/js/utils/populate-store';

Vue.use(VueRouter);
Vue.use(SharedMemory);

populateStore();

const router = new VueRouter({ routes, base: BASE_URL, mode: 'history' });

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});

export default app;
