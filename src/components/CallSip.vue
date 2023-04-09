<template>
  <div class="wide-section settings-section__subsection">
    <div class="wide-section__header is-flex">
      <div class="wide-section__heading">Звонок через SIP</div>
      <div
        class="switcher-label settings-section__switcher switcher-label--thin"
      >
        <input id="input51" type="checkbox" class="switcher-label__input" />
        <label for="input51" class="switcher-label__main"></label>
      </div>
    </div>
    <div class="wide-section__body">
      <div class="post-entry">
        <p class="is-muted">
          Включите эту функцию чтобы Авито и другие площадки не блокировали ваш
          аккаунт. Будет выглядеть так, будто звонки совершаются с разных
          номеров.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallSip',
};
</script>

<style scoped>
.settings-section__switcher {
  margin-left: 1rem;
}

.switcher-label__input {
  position: absolute;
  left: -9999px;
  top: -9999px;
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
}

.switcher-label--thin .switcher-label__main {
  padding-left: 4rem;
  min-width: 3.5rem;
}

.switcher-label--thin .switcher-label__input + label:before {
  border: 0.2rem solid #bababa;
  background: none;
}

.switcher-label--thin .switcher-label__main:before {
  height: 2rem;
  min-width: 3.5rem;
  width: 3.5rem;
}

.switcher-label__main:before {
  width: 5rem;
  background: #a3a3a3;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
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
  top: 0;
  width: 2.5rem;
  background: #f1f1f1;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
}

.switcher-label__input:checked + label:after {
  left: 2.5rem;
  background: #2dc574;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
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

.wide-section__body {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
