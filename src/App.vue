<template>
  <div id="app">
    <div class="page-intro">
      <div class="container-fluid">
        <div class="page-intro__header">
          <h1 class="page-intro__heading main-heading"><p>Настройки</p></h1>
        </div>
      </div>
    </div>

    <div class="container-fluid padding-top-2 mb-100">
      <div class="settings-section">
        <div class="wide-section settings-section__subsection">
          <div class="wide-section__header is-flex">
            <div class="wide-section__heading">Звонок через SIP</div>
            <div
              class="switcher-label settings-section__switcher switcher-label--thin"
            >
              <input
                id="input51"
                type="checkbox"
                class="switcher-label__input"
              />
              <label for="input51" class="switcher-label__main"></label>
            </div>
          </div>
          <div class="wide-section__body">
            <div class="post-entry">
              <p class="is-muted">
                Включите эту функцию чтобы Авито и другие площадки не
                блокировали ваш аккаунт. Будет выглядеть так, будто звонки
                совершаются с разных номеров.
              </p>
            </div>
          </div>
        </div>
        <div class="wide-section settings-section__subsection">
          <div class="wide-section__header is-mobile-hidden">
            <div class="wide-section__heading">Учётная запись</div>
          </div>
          <div class="wide-section__body">
            <div class="settings-section__fields">
              <div
                class="input-field settings-section__field"
                readonly="readonly"
                value="Частное лицо"
              >
                <label class="input-field__label caption">Компания</label>
                <div class="input-field__main">
                  <input
                    type="text"
                    name="text-field"
                    readonly="readonly"
                    class="input-field__input input"
                  />
                  <div class="extra-field__currency"></div>
                </div>
              </div>
              <div
                class="input-field settings-section__field"
                readonly="readonly"
                value="9961235606"
              >
                <label class="input-field__label caption">Логин</label>
                <div class="input-field__main">
                  <input
                    type="text"
                    name="text-field"
                    placeholder=""
                    readonly="readonly"
                    class="input-field__input input"
                  />
                  <div class="extra-field__currency"></div>
                </div>
              </div>
              <div
                class="input-field settings-section__field"
                value="79961235606"
              >
                <label class="input-field__label caption">Номер телефона</label>
                <div class="input-field__main">
                  <!---->
                  <input
                    type="text"
                    name="text-field"
                    placeholder=""
                    class="input-field__input input"
                  />
                  <div class="extra-field__currency"></div>
                  <!---->
                </div>
              </div>
              <div
                class="input-field settings-section__field"
                value="Анонимус-2"
              >
                <label class="input-field__label caption">Имя</label>
                <div class="input-field__main">
                  <!---->
                  <input
                    type="text"
                    name="text-field"
                    placeholder=""
                    class="input-field__input input"
                  />
                  <div class="extra-field__currency"></div>
                  <!---->
                </div>
              </div>
              <div class="input-field settings-section__field" value="">
                <label class="input-field__label caption">Фамилия</label>
                <div class="input-field__main">
                  <!---->
                  <input
                    type="text"
                    name="text-field"
                    placeholder=""
                    class="input-field__input input"
                  />
                  <div class="extra-field__currency"></div>
                  <small class="settings-section__info">* Не обязательно</small>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wide-section settings-section__subsection">
          <div class="wide-section__header is-mobile-hidden">
            <div class="wide-section__heading">
              Оповещения о новых подборках
            </div>
          </div>
          <div class="wide-section__body">
            <div class="settings-section__subcaption caption is-desktop-hidden">
              Уведомления
            </div>
            <div class="post-entry">
              <p class="is-muted">
                Выберите, куда будут приходить уведомления при появлении
                автомобилей, которые подходят под критерии вашей подборки.
              </p>
            </div>
            <div class="settings-section__fields">
              <div
                class="settings-section__subcaption caption is-mobile-hidden"
              >
                Уведомления
              </div>
              <div class="settings-section__notifications">
                <div class="settings-section__field is-flex">
                  <div class="radio-label settings-section__radio">
                    <input
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
                  <div class="checkbox-label__main-tooltip">
                    <div class="checkbox-label__tooltip">
                      Прямой переход в обьявлении на источнике
                    </div>
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
                    <span class="settings-section__current-param-edit"
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
                  </div>
                </div>
                <div class="settings-section__field is-flex">
                  <div class="radio-label settings-section__radio">
                    <input
                      id="is-notification-telegram"
                      type="radio"
                      name="notification"
                      value="1"
                      class="radio-label__input"
                    />
                    <label
                      for="is-notification-telegram"
                      class="radio-label__main"
                      ><a
                        href="https://avclick.me/v/AVinfoBot"
                        class="radio-label__main--link"
                        >Telegram ID</a
                      ></label
                    >
                  </div>
                  <div class="settings-section__current-param">
                    <span class="settings-section__current-param-text"></span>
                    <span class="settings-section__current-param-edit"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wide-section settings-section__subsection">
          <div class="wide-section__header is-mobile-hidden">
            <div class="wide-section__heading">Переход в карточку</div>
          </div>
          <div class="wide-section__body">
            <div class="post-entry">
              <p class="is-muted">
                Выберите, каким образом будет открываться детальное
                представление выбранного вами транспорта.
              </p>
            </div>
            <div class="settings-section__fields">
              <div class="settings-section__notifications block-2">
                <div class="settings-section__field is-flex">
                  <div class="radio-label settings-section__radio">
                    <input
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
                      id="is-notification-source"
                      value="2"
                      type="radio"
                      checked="checked"
                      name="redirecttarget"
                      class="radio-label__input"
                    />
                    <label
                      for="is-notification-source"
                      class="radio-label__main"
                      >На источник
                    </label>
                  </div>
                  <div>
                    <div class="checkbox-label__main-tooltip">
                      <div class="checkbox-label__tooltip">
                        Прямой переход в обьявлении на источнике
                      </div>
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
        </div>
        <div class="wide-section settings-section__subsection">
          <div class="wide-section__header is-mobile-hidden">
            <div class="wide-section__heading">Прочие настройки</div>
          </div>
          <div class="wide-section__body">
            <div class="settings-section__fields">
              <div class="settings-section__field">
                <div
                  tabindex="0"
                  role="combobox"
                  aria-owns="listbox-null"
                  class="multiselect settings-section__field-zone is-sm"
                >
                  <label class="multiselect__label caption">Часовой пояс</label>
                  <div class="multiselect__main">
                    <div class="multiselect__header">
                      <input
                        type="text"
                        autocomplete="off"
                        readonly="readonly"
                        value="Москва"
                        tabindex="0"
                        class="input multiselect__input multiselect__input-selected"
                      />
                    </div>
                    <!---->

                    <div class="multiselect__list">
                      <perfect-scrollbar>
                        <div class="multiselect__item">Tet gorod</div>
                        <div
                          class="multiselect__item multiselect__item-selected"
                        >
                          Tet gorod
                        </div>
                        <div class="multiselect__item">Tet gorod</div>
                        <div class="multiselect__item">Tet gorod</div>
                        <div class="multiselect__item">Tet gorod</div>
                        <div class="multiselect__item">Tet gorod</div>
                        <div class="multiselect__item">Tet gorod</div>
                        <div class="multiselect__item">Tet gorod</div>
                      </perfect-scrollbar>
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>

            <div class="settings-section__fields" style="margin-top: 2.5rem">
              <div class="settings-section__field">
                <div class="checkbox-label has-tooltip" value="true">
                  <div style="display: flex">
                    <input
                      id="input-58"
                      type="checkbox"
                      class="checkbox-label__input"
                      value="true"
                    />
                    <label for="input-58" class="checkbox-label__main">
                      Автоматически переходить к новым объявлениям
                    </label>
                    <span class="checkbox-label__main-tooltip"
                      ><svg
                        content="Лента будет автоматически обновляться 1 раз в 3 секунды"
                        xmlns="http://www.w3.org/2000/svg"
                        class="checkbox-label__tooltip-icon icon sprite-icons"
                        data-tippy-directive=""
                        tabindex="0"
                      ></svg>
                    </span>
                  </div>
                </div>
              </div>

              <div class="settings-section__field" style="display: block">
                <div class="checkbox-label has-tooltip">
                  <div style="display: flex">
                    <input
                      id="input-59"
                      type="checkbox"
                      class="checkbox-label__input"
                      value="false"
                    />
                    <label for="input-59" class="checkbox-label__main">
                      Включить цвета в ленте
                    </label>
                    <span class="checkbox-label__main-tooltip"
                      ><svg
                        content="Включение зеленого/желтого цвета"
                        xmlns="http://www.w3.org/2000/svg"
                        class="checkbox-label__tooltip-icon icon sprite-icons"
                        data-tippy-directive=""
                        tabindex="0"
                      ></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="settings-section__bottom">
              <button
                class="settings-section__btn block btn btn--block btn--primary"
              >
                <!---->
                <span class="btn__text"> Сохранить </span>
                <!---->
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar';

export default {
  name: 'App',
  components: {
    PerfectScrollbar,
  },
};
</script>

<style src="./styles/fonts/fonts.css"></style>
<style src="./styles/normalize.css"></style>
<style src="./styles/styles.css"></style>

<style>
.container-fluid {
  margin: 0 auto;
  max-width: 1920px;
  padding: 0 1.5rem;
}

.padding-top-2 {
  padding-top: 2rem;
}

/* Header  */

.page-intro {
  background: #f9f9fc;
  padding: 0 0 0.1rem;
  padding-top: 2rem;
}

.main-heading {
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
  margin: 1.5rem 0;
}

/*  body */

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

.settings-section .wide-section__heading {
  margin-bottom: 0;
}

.wide-section__heading {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
}

.settings-section__switcher {
  margin-left: 1rem;
}

.switcher-label__input {
  height: 1px;
  left: -9999px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: -9999px;
  visibility: hidden;
  width: 1px;
}

.switcher-label--thin .switcher-label__main {
  min-width: 3.5rem;
  padding-left: 4rem;
}

.switcher-label--thin .switcher-label__input + label:before {
  background: none;
  border: 0.2rem solid #bababa;
}

.switcher-label--thin .switcher-label__main:before {
  height: 2rem;
  min-width: 3.5rem;
  width: 3.5rem;
}

.switcher-label__main:before {
  background: #a3a3a3;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  width: 5rem;
}

.switcher-label__main {
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  color: #000;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  min-height: 2.5rem;
  min-width: 5rem;
  padding: 0 0 0 5.5rem;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.switcher-label__main:before {
  background: #a3a3a3;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  width: 5rem;
}

.switcher-label--thin .switcher-label__input:checked + label:before {
  border-color: #2dc574;
}

.switcher-label--thin .switcher-label__main:after {
  background: #bababa;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  height: 1.9rem;
  top: 0.3rem;
  width: 1.9rem;
}

.switcher-label__main:after {
  background: #f1f1f1;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  top: 0;
  width: 2.5rem;
}

.switcher-label__input:checked + label:after {
  background: #2dc574;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  left: 2.5rem;
}

.switcher-label--thin .switcher-label__input:checked + label:after {
  left: 1.6rem;
}

.switcher-label__main:after,
.switcher-label__main:before {
  content: '';
  height: 2.5rem;
  left: 0;
  position: absolute;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.settings-section__current-param-edit-icon {
  fill: currentColor;
  height: 2.2rem;
  margin-left: 0.5rem;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  width: 2.2rem;
}

.icon {
  display: inline-block;
  height: 2.5rem;
  vertical-align: middle;
  width: 2.5rem;
}

.wide-section__body {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.settings-section .post-entry {
  font-size: 1.3rem;
  font-weight: 500;
}

.settings-section .post-entry .is-muted {
  color: #686869;
}

.settings-section__field:not(:last-child) {
  margin-bottom: 2rem;
}

.settings-section__field .input-field__label {
  font-size: 1.4rem;
  font-weight: 600;
}

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

.input-field__main {
  position: relative;
}

.settings-section .input {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1rem;
}

.input,
.textarea {
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
  outline: none;
  padding: 1.4rem 1.3rem;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  width: 100%;
}

.input:focus {
  border: 1px solid #2dc574;
  -webkit-transition: border 0.5s ease-out;
  -moz-transition: border 0.5s ease-out;
  -o-transition: border 0.5s ease-out;
  transition: border 0.5s ease-out;
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

.radio-label__input {
  height: 1px;
  left: -9999px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: -9999px;
  visibility: hidden;
  width: 1px;
}

.settings-section__field .radio-label__main {
  font-size: 1.4rem;
}

.radio-label__main {
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  color: #000;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  height: 100%;
  line-height: 1.2;
  margin: 0;
  min-height: 2rem;
  min-width: 32rem;
  padding: 0 0 0 2.5rem;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-label__main:after,
.radio-label__main:before {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  content: '';
  position: absolute;
}

.radio-label__main:before {
  background: #fff;
  border: 1px solid #2dc574;
  height: 18px;
  left: 0;
  top: 0;
  width: 18px;
}

.radio-label__main:after {
  background-color: transparent;
  height: 10px;
  left: 4px;
  top: 4px;
  width: 10px;
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

.settings-section .post-entry + .settings-section__fields {
  margin-top: 2rem;
}

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
  font-family: inherit;
  font-weight: 700;
  background: #fff;
  border: 1px solid #e1e1e3;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.multiselect__header:after,
.multiselect__input {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}

.multiselect.is-sm .multiselect__header:after {
  background-size: 10px;
  right: 11px;
  top: 11px;
  width: 10px;
}

.multiselect__header:after,
.multiselect__input {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}

.multiselect__header:after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='15' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.842.99 6.428 6 6.429-6' stroke='%232DC574' stroke-width='1.7' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-position: 50%;
  background-repeat: no-repeat;
  content: '';
  height: 8px;
  position: absolute;
  right: 20px;
  top: 18px;
  width: 15px;
}

.ps {
  width: 100%;
  max-height: 220px;
  border-radius: 4px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  background-color: #2dc574;
}

.ps__thumb-y {
  background-color: #ffffff !important;
}

.ps__thumb-y:hover {
  background-color: #29a663 !important;
  width: 8px !important;
}

.ps__rail-y {
  width: 11px !important;
}

.multiselect__list {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 10;
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
  background-color: #29a663;
  font-weight: 600;
  border-radius: 4px;
  position: relative;
}

.multiselect__item-selected:after {
  content: '';
  position: absolute;
  height: 8px;
  left: 12px;
  bottom: 13px;
  width: 15px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.492 6.092 4.76 9.333l7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
  background-position: 50%;
  background-repeat: no-repeat;
  color: white;
}

.checkbox-label__input {
  height: 1px;
  /* left: -9999px; */
  opacity: 0;
  overflow: hidden;
  position: absolute;
  /* top: -9999px; */
  visibility: hidden;
  width: 1px;
}

.settings-section__field .checkbox-label__main {
  width: 100%;
}

.checkbox-label__main {
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  min-height: 2rem;
  min-width: 42rem;
  padding: 0 0 0 2.5rem;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
}

.checkbox-label__main:before {
  border: 1px solid #2dc574;
  -webkit-border-radius: 0.2rem;
  -moz-border-radius: 0.2rem;
  border-radius: 0.2rem;
  content: '';
  height: 1.8rem;
  left: 0;
  position: absolute;
  top: 0.1rem;
  width: 1.8rem;
}

.checkbox-label__input:checked + .checkbox-label__main:before {
  background-color: #2dc574;
  border-color: #2dc574;
  content: '';
  position: absolute;
}

.checkbox-label__input:checked + .checkbox-label__main:after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.492 6.092 4.76 9.333l7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  color: #fff;
  content: '';
  height: 1.3rem;
  left: 0.2rem;
  position: absolute;
  top: 0.3rem;
  width: 1.3rem;
}

.settings-section__field {
  position: relative;
}

.checkbox-label__tooltip-icon.icon {
  fill: #cdcdcd;
  cursor: help;
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 0.5rem;
}

.checkbox-label__tooltip {
  position: absolute;
  z-index: 1;
  top: 55%;
  left: 46.5%;
  padding: 5px 10px;
  width: 100%;
  background: #2dc574;
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 2px;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.checkbox-label__main-tooltip:hover .checkbox-label__tooltip {
  top: 125%;
  left: 6.5%;
  opacity: 1;
  pointer-events: auto;
}

.settings-section__bottom {
  border-top: 0.1rem solid #e1e1e3;
  margin-top: 3rem;
  padding-top: 1.5rem;
}

.btn--block {
  display: block;
  width: 100%;
}

.btn {
  background: transparent;
  border: 0.1rem solid transparent;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  outline: none;
  padding: 1.3rem 2rem;
  text-align: center;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.btn--primary {
  background: #2dc574;
  color: #fff;
}

.btn--primary:hover {
  background: #26b066;
  transition: background 0.3s ease-in;
}

.btn--primary:active {
  background: #2b8e59;
  transition: background 0.3s ease-in;
}

.btn__text {
  display: inline-block;
  vertical-align: middle;
}

.wrapper {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

@media (min-width: 400px) {
  .checkbox-label__tooltip:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    background: #2dc574;
    left: 90%;
    top: -6px;
    transform: translateX(-50%) rotate(45deg);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
}

@media (min-width: 576px) {
  .settings-section .wide-section__body {
    max-width: 49rem;
  }

  .settings-section__fields {
    max-width: 37rem;
  }
}

@media (min-width: 768px) {
  .checkbox-label__main-tooltip:hover .checkbox-label__tooltip {
    top: 85%;
    left: 46.6%;
  }

  .checkbox-label__tooltip:before {
    left: 50%;
    top: -6px;
  }

  .main-heading {
    font-size: 3rem;
  }

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

  .is-desktop-hidden {
    display: none !important;
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
}

@media (min-width: 1200px) {
  .settings-section {
    margin-bottom: 12rem;
  }
}
</style>
<style>
.mb-100 {
  padding-bottom: 100px;
}
</style>
