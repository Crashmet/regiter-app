<template>
  <div class="settings-section__bottom">
    <button
      @click="handlerSaveUserData"
      class="settings-section__btn block btn btn--block btn--primary"
    >
      <!---->
      <span class="btn__text"> Сохранить </span>
      <!---->
    </button>
  </div>
</template>

<script>
export default {
  name: 'SaveButton',
  methods: {
    handlerSaveUserData() {
      this.$emit('handlerSaveUserData');
    },
  },
};
</script>

<style scoped>
/* *** SAVE BUTTON ***   */

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
  padding: 1.3rem 2rem;
  display: inline-block;
  background: transparent;
  border: 0.1rem solid transparent;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  outline: none;
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
  cursor: pointer;
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
</style>
