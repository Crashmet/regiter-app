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
      Vue.set(state, 'dataUser', responseDataUser);
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

    async fetchSettingsList({ state, commit }) {
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
          const {
            turbosip,
            companyname: companyName,
            login,
            phone,
            fname: firstName,
            lname: lastName,
            notifytype,
            notifytypestring,
            sendMethod,
            timezonestring,
            locklentaupdate,
            colorlenta,
          } = response.data;

          const responseDataUser = {
            turbosip,
            companyName,
            login,
            phone,
            firstName,
            lastName,
            notifytype,
            notifytypestring,
            sendMethod,
            timezonestring,
            locklentaupdate,
            colorlenta,
          };

          commit('SET_DATA_USER', responseDataUser);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

export default settingsStore;
