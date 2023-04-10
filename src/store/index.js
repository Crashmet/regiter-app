import Vue from 'vue';
import Vuex from 'vuex';
import settingsStore from './modules/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    settingsStore,
  },
});
