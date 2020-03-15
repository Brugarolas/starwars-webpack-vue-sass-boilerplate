import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import modules from './modules';

Vue.use(Vuex);

const store = new Store({
  modules
});

export default store;
