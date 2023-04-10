<template>
  <div class="wide-section settings-section__subsection">
    <div class="wide-section__header is-mobile-hidden">
      <div class="wide-section__heading">Оповещения о новых подборках</div>
    </div>
    <div class="wide-section__body">
      <div class="settings-section__subcaption caption is-desktop-hidden">
        Уведомления
      </div>
      <div class="post-entry">
        <p class="is-muted">
          Выберите, куда будут приходить уведомления при появлении автомобилей,
          которые подходят под критерии вашей подборки.
        </p>
      </div>
      <div class="settings-section__fields">
        <div class="settings-section__subcaption caption is-mobile-hidden">
          Уведомления
        </div>
        <div class="settings-section__notifications">
          <div class="settings-section__field is-flex">
            <div class="radio-label settings-section__radio">
              <input
                v-model="notifytype"
                id="is-notification-none"
                value="-1"
                type="radio"
                checked="checked"
                name="notification"
                class="radio-label__input"
              />
              <label for="is-notification-none" class="radio-label__main"
                >Выкл</label
              >
            </div>
          </div>
          <div class="settings-section__field is-flex">
            <div class="radio-label settings-section__radio">
              <input
                v-model="notifytype"
                id="is-notification-push"
                value="0"
                type="radio"
                disabled="disabled"
                name="notification"
                class="radio-label__input"
              />
              <label for="is-notification-push" class="radio-label__main"
                >Push</label
              >
            </div>
            <div id="tippy-push-js">
              <svg
                class="checkbox-label__tooltip-icon icon sprite-icons"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0,0,256,256"
                width="48px"
                height="48px"
                fill-rule="nonzero"
              >
                <g
                  fill="#cdcdcd"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path
                      d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM24,14c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM23.97656,20.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v11c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-11c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="settings-section__field is-flex">
            <div class="radio-label settings-section__radio">
              <input
                v-model="notifytype"
                id="is-notification-email"
                value="2"
                type="radio"
                checked="checked"
                name="notification"
                class="radio-label__input"
              />
              <label for="is-notification-email" class="radio-label__main"
                >Email</label
              >
            </div>
            <div class="settings-section__current-param">
              <span class="settings-section__current-param-text"></span>
              <template v-if="isInputEmail">
                <div class="input-field__main">
                  <input
                    v-model="email"
                    type="text"
                    name="text-field"
                    placeholder=""
                    class="input-field__input input"
                  />
                </div>
              </template>
              <template v-else>
                <span
                  @click="handlerInputEmail"
                  class="settings-section__current-param-edit"
                  ><svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon settings-section__current-param-edit-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.22081 3.77446C9.63603 3.35924 10.1992 3.12598 10.7864 3.12598C12.0092 3.12598 13.0005 4.11725 13.0005 5.34004C13.0005 5.92725 12.7672 6.49041 12.352 6.90563L9.74075 9.51684C8.54147 10.7161 7.0388 11.5669 5.39341 11.9783L4.88871 12.1044C4.36527 12.2353 3.89113 11.7612 4.02199 11.2377L4.14816 10.733C4.55951 9.08763 5.41031 7.58496 6.60959 6.38568L9.22081 3.77446ZM10.7864 4.12598C10.4644 4.12598 10.1556 4.25389 9.92791 4.48157L9.52581 4.88367C9.46599 5.22738 9.63626 5.69076 10.036 6.09047C10.4357 6.49017 10.8991 6.66044 11.2428 6.60062L11.6449 6.19852C11.8725 5.97084 12.0005 5.66203 12.0005 5.34004C12.0005 4.66953 11.4569 4.12598 10.7864 4.12598ZM10.3671 7.47631C9.97046 7.32906 9.60994 7.07865 9.32886 6.79757C9.04778 6.51649 8.79738 6.15598 8.65012 5.75936L7.3167 7.09279C6.24558 8.16391 5.4857 9.506 5.11831 10.9756L5.10745 11.019L5.15087 11.0081C6.62044 10.6407 7.96253 9.88086 9.03365 8.80974L10.3671 7.47631Z"
                      fill="#2DC574"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.33203 14.293C3.33203 14.0168 3.55589 13.793 3.83203 13.793H13.1654C13.4415 13.793 13.6654 14.0168 13.6654 14.293C13.6654 14.5691 13.4415 14.793 13.1654 14.793H3.83203C3.55589 14.793 3.33203 14.5691 3.33203 14.293Z"
                      fill="#2DC574"
                    ></path>
                  </svg>
                </span>
              </template>
            </div>
          </div>
          <div class="settings-section__field is-flex">
            <div class="radio-label settings-section__radio">
              <input
                v-model="notifytype"
                id="is-notification-telegram"
                type="radio"
                name="notification"
                value="1"
                class="radio-label__input"
              />
              <label for="is-notification-telegram" class="radio-label__main"
                ><a
                  href="https://avclick.me/v/AVinfoBot"
                  class="radio-label__main--link"
                  >Telegram ID</a
                ></label
              >
            </div>
            <div class="settings-section__current-param">
              <template v-if="isInputTg">
                <div class="input-field__main">
                  <input
                    v-model="telegramChat"
                    type="text"
                    name="text-field"
                    placeholder=""
                    class="input-field__input input"
                  />
                </div>
              </template>
              <template v-else>
                <span
                  @click="handlerInputTg"
                  class="settings-section__current-param-edit"
                  ><svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon settings-section__current-param-edit-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.22081 3.77446C9.63603 3.35924 10.1992 3.12598 10.7864 3.12598C12.0092 3.12598 13.0005 4.11725 13.0005 5.34004C13.0005 5.92725 12.7672 6.49041 12.352 6.90563L9.74075 9.51684C8.54147 10.7161 7.0388 11.5669 5.39341 11.9783L4.88871 12.1044C4.36527 12.2353 3.89113 11.7612 4.02199 11.2377L4.14816 10.733C4.55951 9.08763 5.41031 7.58496 6.60959 6.38568L9.22081 3.77446ZM10.7864 4.12598C10.4644 4.12598 10.1556 4.25389 9.92791 4.48157L9.52581 4.88367C9.46599 5.22738 9.63626 5.69076 10.036 6.09047C10.4357 6.49017 10.8991 6.66044 11.2428 6.60062L11.6449 6.19852C11.8725 5.97084 12.0005 5.66203 12.0005 5.34004C12.0005 4.66953 11.4569 4.12598 10.7864 4.12598ZM10.3671 7.47631C9.97046 7.32906 9.60994 7.07865 9.32886 6.79757C9.04778 6.51649 8.79738 6.15598 8.65012 5.75936L7.3167 7.09279C6.24558 8.16391 5.4857 9.506 5.11831 10.9756L5.10745 11.019L5.15087 11.0081C6.62044 10.6407 7.96253 9.88086 9.03365 8.80974L10.3671 7.47631Z"
                      fill="#2DC574"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.33203 14.293C3.33203 14.0168 3.55589 13.793 3.83203 13.793H13.1654C13.4415 13.793 13.6654 14.0168 13.6654 14.293C13.6654 14.5691 13.4415 14.793 13.1654 14.793H3.83203C3.55589 14.793 3.33203 14.5691 3.33203 14.293Z"
                      fill="#2DC574"
                    ></path>
                  </svg>
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import tippy from 'tippy.js';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';

export default {
  name: 'SettingNotifications',
  data() {
    return {
      isInputEmail: false,
      isInputTg: false,

      notifytype: 0,
      email: '',
      telegramChat: '',
    };
  },
  mounted() {
    tippy('#tippy-push-js', {
      content: 'Можно установить только в приложении',
      placement: 'bottom',
      theme: 'green',
      delay: [50, 300],
      arrow: roundArrow,
    });
  },
  computed: {
    ...mapGetters('settingsStore', ['dataUser']),
  },
  methods: {
    handlerInputEmail() {
      this.isInputEmail = true;
    },
    handlerInputTg() {
      this.isInputTg = true;
    },
  },
  watch: {
    dataUser() {
      this.notifytype = this.dataUser.notifytype;

      this.email = this.dataUser.email === 'string' ? '' : this.dataUser.email;

      this.telegramChat =
        this.dataUser.telegramChat === 'string'
          ? ''
          : this.dataUser.telegramChat;
    },

    notifytype() {
      this.$emit('emitNotifytype', this.notifytype);
    },

    email() {
      this.$emit('emitEmail', this.email);
    },

    telegramChat() {
      this.$emit('emitTelegramChat', this.telegramChat);
    },
  },
};
</script>

<style src="@/styles/tippy/tippy.css"></style>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  height: 2.5rem;
  width: 2.5rem;
}

/* ***  INFO ICON ***  */

.checkbox-label__tooltip-icon.icon {
  width: 2.5rem;
  height: 2.5rem;
  fill: #cdcdcd;
  cursor: help;
}

/* *** RADIO ***  */

.radio-label__input[disabled] + .radio-label__main {
  cursor: default;
  opacity: 0.5;
}
.radio-label__input {
  position: absolute;
  overflow: hidden;
  visibility: hidden;
  top: -9999px;
  left: -9999px;
  height: 1px;
  width: 1px;
  opacity: 0;
}

.settings-section__field .radio-label__main {
  font-size: 1.4rem;
}

.radio-label__main {
  position: relative;
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
  margin: 0;
  padding: 0 0 0 2.5rem;
  height: 100%;
  min-height: 2rem;
  min-width: 32rem;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.radio-label__main:after,
.radio-label__main:before {
  position: absolute;
  content: '';
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.radio-label__main:before {
  left: 0;
  top: 0;
  height: 18px;
  width: 18px;
  border: 1px solid #2dc574;
  background: #fff;
}

.radio-label__main:after {
  height: 10px;
  width: 10px;
  left: 4px;
  top: 4px;
  background-color: transparent;
}

.radio-label__input:checked + .radio-label__main:before {
  border-width: 0.2rem;
}

.radio-label__input:checked + .radio-label__main:after {
  background-color: #2dc574;
}

.settings-section__field .radio-label__main--link {
  color: #2dc574;
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

/* *** INPUT *** */

.input-field__main {
  position: relative;
}

.settings-section .input {
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  font-weight: 400;
}

.input,
.textarea {
  width: 100%;
  padding: 1.4rem 1.3rem;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: 0.1rem solid #e1e1e3;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  border-radius: 0.3rem;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: #222;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.1;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.input:focus {
  border: 1px solid #2dc574;
  -webkit-transition: border 0.5s ease-out;
  -moz-transition: border 0.5s ease-out;
  -o-transition: border 0.5s ease-out;
  transition: border 0.5s ease-out;
}
</style>
