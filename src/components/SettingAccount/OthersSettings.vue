<template>
  <div class="wide-section settings-section__subsection">
    <div class="wide-section__header is-mobile-hidden">
      <div class="wide-section__heading">Прочие настройки</div>
    </div>
    <div class="wide-section__body">
      <div class="settings-section__fields">
        <div class="settings-section__field">
          <div
            @click="handlerOpenSelectList"
            tabindex="0"
            role="combobox"
            aria-owns="listbox-null"
            class="multiselect settings-section__field-zone is-sm"
          >
            <label class="multiselect__label caption">Часовой пояс</label>
            <div class="multiselect__main">
              <div class="multiselect__header">
                <input
                  v-model="cityInput"
                  type="text"
                  autocomplete="off"
                  readonly="readonly"
                  tabindex="0"
                  class="input multiselect__input multiselect__input-selected"
                />
              </div>
              <!---->
              <div class="multiselect__list" v-if="isOpenSelectList">
                <perfect-scrollbar>
                  <div
                    @click="handlerSelect(city.serverName)"
                    class="multiselect__item"
                    :class="[city.select ? 'multiselect__item-selected' : '']"
                    v-for="city in citys"
                    :key="city.name"
                  >
                    {{ city.name }}
                  </div>
                </perfect-scrollbar>
              </div>
              <!---->
            </div>
          </div>
        </div>
      </div>

      <div class="settings-section__fields" style="margin-top: 2.5rem">
        <div class="settings-section__field">
          <div class="checkbox-label has-tooltip">
            <div style="display: flex">
              <input
                v-model="isLockLentaUpdate"
                id="input-58"
                type="checkbox"
                class="checkbox-label__input"
              />
              <label for="input-58" class="checkbox-label__main">
                Автоматически переходить к новым объявлениям
              </label>
              <div id="tippy-new-ad-js">
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
          </div>
        </div>

        <div class="settings-section__field" style="display: block">
          <div class="checkbox-label has-tooltip">
            <div style="display: flex">
              <input
                v-model="isColorLenta"
                id="input-59"
                type="checkbox"
                class="checkbox-label__input"
                value="false"
              />
              <label for="input-59" class="checkbox-label__main">
                Включить цвета в ленте
              </label>
              <div id="tippy-color-js">
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
          </div>
        </div>
      </div>
      <save-button @handlerSaveUserData="handlerSaveUserData" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SaveButton from '../UI/SaveButton.vue';

import { PerfectScrollbar } from 'vue2-perfect-scrollbar';
import tippy from 'tippy.js';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';

export default {
  name: 'OthersSettings',
  components: {
    PerfectScrollbar,
    SaveButton,
  },
  data() {
    return {
      citys: [
        { name: 'Калининград', select: false, serverName: 'Kaliningrad' },
        { name: 'Москва', select: true, serverName: 'Moscow' },
        { name: 'Самара', select: false, serverName: 'Samara' },
        { name: 'Екатеринбург', select: false, serverName: 'Ekaterinburg' },
        { name: 'Омск', select: false, serverName: 'Omsk' },
        { name: 'Красноярск', select: false, serverName: 'Krasnoyarsk' },
        { name: 'Иркутск', select: false, serverName: 'Irkutsk' },
        { name: 'Якутск', select: false, serverName: 'Yakutsk' },
        { name: 'Владивосток', select: false, serverName: 'Vladivostok' },
        { name: 'Магадан', select: false, serverName: 'Magadan' },
        { name: 'Камчатка', select: false, serverName: 'Kamchatka' },
      ],

      isOpenSelectList: false,

      cityInput: '',
      isLockLentaUpdate: false,
      isColorLenta: true,
    };
  },
  mounted() {
    tippy('#tippy-new-ad-js', {
      content: 'Лента будет автоматически обновляться 1 раз в 3 секунды',
      placement: 'bottom',
      theme: 'green',
      delay: [50, 300],
      arrow: roundArrow,
    });

    tippy('#tippy-color-js', {
      content: 'Включение зеленого/желтого цвета',
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
    handlerSaveUserData() {
      this.$emit('handlerSaveUserData');
    },

    handlerOpenSelectList() {
      this.isOpenSelectList = !this.isOpenSelectList;
    },

    handlerSelect(city) {
      this.citys.forEach((el) => {
        el.select = false;
        if (el.serverName === city) {
          el.select = true;
          this.cityInput = el.name;
        }
      });
    },
  },

  watch: {
    dataUser() {
      let city = this.dataUser.timezonestring;
      this.handlerSelect(city);

      this.isLockLentaUpdate = this.dataUser.locklentaupdate;
      this.isColorLenta = this.dataUser.colorlenta;
    },
  },
};
</script>

<style src="@/styles/tippy/tippy.css"></style>
<style src="@/styles/perfect-scrollbar/ps.css"></style>

<style scoped>
/* ***  INFO ICON ***  */

.checkbox-label__tooltip-icon.icon {
  width: 2.5rem;
  height: 2.5rem;
  fill: #cdcdcd;
  cursor: help;
}

/* ***  CHECKBOX-label ***  */

.checkbox-label__input {
  opacity: 0;
  position: absolute;
  overflow: hidden;
  visibility: hidden;
  top: -9999px;
  left: -9999px;
  height: 1px;
  width: 1px;
}

.settings-section__field .checkbox-label__main {
  width: 100%;
}

.checkbox-label__main {
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
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  padding: 0 0 1rem 2.5rem;
  min-height: 2rem;
  min-width: 22rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  width: 100%;
  user-select: none;
  cursor: pointer;
}

.checkbox-label__main:before {
  position: absolute;
  content: '';
  top: 0.1rem;
  left: 0;
  height: 1.8rem;
  width: 1.8rem;
  border: 1px solid #2dc574;
  -webkit-border-radius: 0.2rem;
  -moz-border-radius: 0.2rem;
  border-radius: 0.2rem;
}

.checkbox-label__input:checked + .checkbox-label__main:before {
  position: absolute;
  content: '';
  background-color: #2dc574;
  border-color: #2dc574;
}

.checkbox-label__input:checked + .checkbox-label__main:after {
  position: absolute;
  content: '';
  width: 1.3rem;
  top: 0.3rem;
  left: 0.2rem;
  height: 1.3rem;
  color: #fff;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.492 6.092 4.76 9.333l7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
}

/*  *** MULTISELECT *** */

.multiselect__main {
  position: relative;
}

.multiselect.is-sm .multiselect__input {
  height: 28px;
}

.multiselect__input {
  padding: 0 40px 0 10px;
  height: 45px;
  width: 100%;
  border: 1px solid #e1e1e3;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-family: inherit;
  font-weight: 700;
  background: #fff;
}

.multiselect__header:after,
.multiselect__input {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}

.multiselect.is-sm .multiselect__header:after {
  top: 11px;
  right: 11px;
  width: 10px;
  background-size: 10px;
}

.multiselect__header:after,
.multiselect__input {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}

.multiselect__header:after {
  position: absolute;
  content: '';
  top: 18px;
  right: 20px;
  height: 8px;
  width: 15px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='15' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.842.99 6.428 6 6.429-6' stroke='%232DC574' stroke-width='1.7' stroke-linejoin='round'/%3E%3C/svg%3E");
}

.ps {
  max-height: 220px;
  width: 100%;
  border-radius: 4px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  background-color: #2dc574;
}

.multiselect__list {
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  width: 100%;
}

.multiselect__item {
  padding: 7px 35px;
  height: 32px;
  width: 100%;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
}

.multiselect__item:hover {
  padding: 7px 35px;
  height: 32px;
  width: 100%;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: #29a663;
}

.multiselect__item-selected {
  position: relative;
  border-radius: 4px;
  font-weight: 600;
  background-color: #29a663;
}

.multiselect__item-selected:after {
  content: '';
  position: absolute;
  left: 12px;
  bottom: 13px;
  height: 8px;
  width: 15px;
  color: white;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.492 6.092 4.76 9.333l7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
}

/* *** INPUTS *** */

.settings-section__field .input-field__label {
  font-size: 1.4rem;
  font-weight: 600;
}

.settings-section .input {
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  font-weight: 500;
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
