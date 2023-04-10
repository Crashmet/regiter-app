import axios from '@/plugins/axios/index';
import Vue from 'vue';

const settingsStore = {
  namespaced: true,
  state: {
    userId: '',
    token: '',

    dataUser: {},
  },
  mutations: {
    SET_USER_ID(state, responseUserId) {
      Vue.set(state, 'userId', responseUserId);
    },

    SET_TOKEN(state, responseToken) {
      Vue.set(state, 'token', responseToken);
    },

    SET_DATA_USER(state, responseDataUser) {
      const {
        turbosip,
        companyname: companyName,
        login,
        phone,
        fname: firstName,
        lname: lastName,
        notifytype,
        email,
        telegramChat,
        sendMethod,
        timezonestring,
        locklentaupdate,
        colorlenta,
      } = responseDataUser;

      const dataUser = {
        turbosip,
        companyName,
        login,
        phone,
        firstName,
        lastName,
        notifytype,
        email,
        telegramChat,
        sendMethod,
        timezonestring,
        locklentaupdate,
        colorlenta,
      };
      Vue.set(state, 'dataUser', dataUser);
    },
  },
  getters: {
    token: ({ token }) => token,
    dataUser: ({ dataUser }) => dataUser,
  },
  actions: {
    async fetchLoginUser({ commit }) {
      await axios
        .post(
          '/login',
          {
            login: '9961235606',
            password: '1842714132',
            fromuser: 0,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
              'X-Device-OS': 'win',
            },
          }
        )
        .then(function (response) {
          commit('SET_TOKEN', response.data.token);
          commit('SET_USER_ID', response.data.user.id);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async fetchUserData({ state, commit }) {
      await axios
        .get(`/user/${state.userId}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
            'X-User-Token': `${state.token}`,
            'X-Device-OS': 'win',
          },
        })
        .then(function (response) {
          commit('SET_DATA_USER', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async setUserData({ state, commit }, userData) {
      commit('SET_DATA_USER', userData);

      const dataJson = JSON.stringify(userData);

      await axios
        .put(`/user/${state.userId}`, dataJson, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
            'X-User-Token': `${state.token}`,
            'X-Device-OS': 'win',
          },
        })
        .then(function (response) {
          alert(`status: ${response.status}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

export default settingsStore;
