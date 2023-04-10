<template>
  <div class="wide-section settings-section__subsection">
    <div class="wide-section__header is-mobile-hidden">
      <div class="wide-section__heading">Переход в карточку</div>
    </div>
    <div class="wide-section__body">
      <div class="post-entry">
        <p class="is-muted">
          Выберите, каким образом будет открываться детальное представление
          выбранного вами транспорта.
        </p>
      </div>
      <div class="settings-section__fields">
        <div class="settings-section__notifications block-2">
          <div class="settings-section__field is-flex">
            <div class="radio-label settings-section__radio">
              <input
                v-model="sendMethod"
                id="is-notification-card"
                value="0"
                type="radio"
                checked="checked"
                name="redirecttarget"
                class="radio-label__input"
              />
              <label for="is-notification-card" class="radio-label__main"
                >В карточку в текущем окне</label
              >
            </div>
          </div>
          <div class="settings-section__field is-flex">
            <div class="radio-label settings-section__radio">
              <input
                v-model="sendMethod"
                id="is-notification-page"
                value="1"
                type="radio"
                checked="checked"
                name="redirecttarget"
                class="radio-label__input"
              />
              <label for="is-notification-page" class="radio-label__main"
                >В карточку в отдельном окне</label
              >
            </div>
          </div>
          <div class="settings-section__field is-flex">
            <div class="radio-label settings-section__radio">
              <input
                v-model="sendMethod"
                id="is-notification-source"
                value="2"
                type="radio"
                checked="checked"
                name="redirecttarget"
                class="radio-label__input"
              />
              <label for="is-notification-source" class="radio-label__main"
                >На источник
              </label>
            </div>
            <div id="tippy-source-js">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import tippy from 'tippy.js';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';

export default {
  name: 'SettingViewCards',
  data() {
    return {
      sendMethod: 0,
    };
  },
  mounted() {
    tippy('#tippy-source-js', {
      content: 'Прямой переход в обьявлении на источнике',
      placement: 'bottom',
      theme: 'green',
      delay: [50, 300],
      arrow: roundArrow,
    });
  },
  computed: {
    ...mapGetters('settingsStore', ['dataUser']),
  },
  watch: {
    dataUser() {
      this.sendMethod = this.dataUser.sendMethod;
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
</style>
