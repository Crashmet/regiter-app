<template>
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
        <div class="input-field settings-section__field" value="79961235606">
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
        <div class="input-field settings-section__field" value="Анонимус-2">
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
</template>

<script>
export default {
  name: 'AccountData',
};
</script>

<style scoped>
/* *** INPUTS *** */

.settings-section__field .input-field__label {
  font-size: 1.4rem;
  font-weight: 500;
}

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
