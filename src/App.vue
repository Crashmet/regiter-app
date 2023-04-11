<template>
  <div id="app">
    <Header />
    <div class="container-fluid padding-top-2 mb-100" style="padding-top: 2rem">
      <div class="settings-section">
        <setting-call-sip @emitSip="emitSip" />
        <account-data
          @emitPhone="emitPhone"
          @emitFirstName="emitFirstName"
          @emitLastName="emitLastName"
        />
        <setting-notifications
          @emitNotifytype="emitNotifytype"
          @emitEmail="emitEmail"
          @emitTelegramChat="emitTelegramChat"
        />
        <setting-view-cards @emitSendMethod="emitSendMethod" />
        <others-settings
          @handlerSaveUserData="handlerSaveUserData"
          @emitCityInput="emitCityInput"
          @emitisLockLentaUpdate="emitisLockLentaUpdate"
          @emitisColorLenta="emitisColorLenta"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Header from './components/SettingAccount/Header.vue';
import SettingCallSip from './components/SettingAccount/SettingCallSip.vue';
import AccountData from './components/SettingAccount/AccountData.vue';
import SettingNotifications from './components/SettingAccount/SettingNotifications.vue';
import SettingViewCards from './components/SettingAccount/SettingViewCards.vue';
import OthersSettings from './components/SettingAccount/OthersSettings.vue';

export default {
  name: 'App',
  components: {
    Header,
    SettingCallSip,
    AccountData,
    SettingViewCards,
    SettingNotifications,
    OthersSettings,
  },
  data() {
    return {
      turbosip: 'off',
      phone: '',
      firstName: '',
      lastName: '',
      notifytype: 0,
      email: '',
      telegramChat: '',
      sendMethod: 0,
      cityInput: '',
      isLockLentaUpdate: false,
      isColorLenta: true,
    };
  },
  created() {
    this.fetchLoginUser();
  },
  computed: {
    ...mapGetters('settingsStore', ['token', 'dataUser']),
  },
  methods: {
    ...mapActions('settingsStore', [
      'fetchLoginUser',
      'fetchUserData',
      'setUserData',
    ]),

    handlerSaveUserData() {
      const userData = {
        turbosip: this.turbosip,
        phone: this.phone,
        fname: this.firstName,
        lname: this.lastName,
        notifytype: this.notifytype,
        email: this.email,
        telegramChat: this.telegramChat,
        sendMethod: this.sendMethod,
        timezonestring: this.cityInput,
        locklentaupdate: this.isLockLentaUpdate,
        colorlenta: this.isColorLenta,
      };

      this.setUserData(userData);
    },

    emitSip(turbosip) {
      this.turbosip = turbosip;
    },

    emitPhone(phone) {
      this.phone = phone;
    },

    emitFirstName(firstName) {
      this.firstName = firstName;
    },

    emitLastName(lastName) {
      this.lastName = lastName;
    },

    emitNotifytype(notifytype) {
      this.notifytype = notifytype;
    },

    emitEmail(email) {
      this.email = email;
    },

    emitTelegramChat(telegramChat) {
      this.telegramChat = telegramChat;
    },

    emitSendMethod(sendMethod) {
      this.sendMethod = sendMethod;
    },

    emitCityInput(cityInput) {
      this.cityInput = cityInput;
    },

    emitisLockLentaUpdate(isLockLentaUpdate) {
      this.isLockLentaUpdate = isLockLentaUpdate;
    },

    emitisColorLenta(isColorLenta) {
      this.isColorLenta = isColorLenta;
    },
  },
  watch: {
    token() {
      this.fetchUserData();
    },
  },
};
</script>

<style src="@/styles/fonts/fonts.css"></style>
<style src="@/styles/normalize.css"></style>
<style src="@/styles/allBaseStyle.css"></style>

<style>
.caption {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* ***settings-section***  */

.settings-section {
  margin-bottom: 5rem;
}

.settings-section__subsection:not(:last-child) {
  margin-bottom: 2rem;
}

.settings-section .wide-section__header {
  margin-bottom: 1.5rem;
}

.settings-section .wide-section {
  -webkit-box-align: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}

.settings-section .wide-section__header.is-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.settings-section .wide-section__heading {
  margin-bottom: 0;
}

.wide-section__heading {
  margin-bottom: 2.5rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.settings-section .post-entry {
  font-size: 1.3rem;
  font-weight: 500;
}

.settings-section .post-entry .is-muted {
  color: #686869;
}

.settings-section .post-entry + .settings-section__fields {
  margin-top: 2rem;
}

.settings-section__field:not(:last-child) {
  margin-bottom: 2rem;
}

.settings-section__current-param-edit-icon {
  margin-left: 0.5rem;
  height: 2.2rem;
  width: 2.2rem;
  fill: currentColor;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.settings-section__info {
  color: #a3a3a3;
  display: block;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.settings-section__subcaption {
  margin-bottom: 2rem;
}

.settings-section__field.is-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.settings-section__field:not(:last-child) {
  margin-bottom: 2rem;
}

.settings-section__notifications .settings-section__field {
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

/*  *** min-width: 576px ***  */

@media (min-width: 576px) {
  .settings-section__fields {
    max-width: 37rem;
  }

  .wide-section__body {
    max-width: 49rem;
  }
}

/*  *** min-width: 768px ***  */

@media (min-width: 768px) {
  /* settings-section */
  .settings-section {
    margin-bottom: 8rem;
  }

  .settings-section__subsection:not(:last-child) {
    margin-bottom: 4rem;
  }

  .settings-section .wide-section__header.is-flex {
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .settings-section__field .input-field__label {
    -webkit-box-flex: 0;
    -moz-box-flex: 0;
    -webkit-flex: 0 0 12rem;
    -ms-flex: 0 0 12rem;
    flex: 0 0 12rem;
    font-weight: 500;
    margin-bottom: 0;
    margin-right: 1rem;
    margin-top: 0.6rem;
    max-width: 12rem;
  }

  .wide-section {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .settings-section .wide-section__header {
    margin-bottom: 0;
  }

  .wide-section__header {
    -webkit-box-flex: 0;
    -moz-box-flex: 0;
    -webkit-flex: 0 0 25rem;
    -ms-flex: 0 0 25rem;
    flex: 0 0 25rem;
    margin-right: 2rem;
    max-width: 25rem;
  }

  .settings-section .post-entry {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .settings-section__field {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .settings-section__field .input-field__main {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .settings-section .input {
    font-weight: 400;
  }

  .settings-section__field .input-field__input {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .settings-section__subcaption.is-desktop-hidden {
    display: none;
  }

  .settings-section__notifications .settings-section__field:not(:last-child) {
    border-bottom: 0.1rem solid #e1e1e3;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .settings-section__field {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .settings-section__notifications .settings-section__radio {
    -webkit-box-flex: 0;
    -moz-box-flex: 0;
    -webkit-flex: 0 0 12rem;
    -ms-flex: 0 0 12rem;
    flex: 0 0 12rem;
    margin-right: 1rem;
    max-width: 12rem;
  }

  .settings-section__field-zone {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .settings-section__field-zone label {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 0;
    margin-right: 2.5rem;
    margin-top: 0.4rem;
  }

  .is-desktop-hidden {
    display: none !important;
  }
}

/* *** min-width: 1200px *** */

@media (min-width: 1200px) {
  .settings-section {
    margin-bottom: 12rem;
  }
}

.mb-100 {
  padding-bottom: 100px;
}
</style>
