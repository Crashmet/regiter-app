<template>
  <div class="page-intro">
    <div class="container-fluid">
      <div class="page-intro__header">
        <h1 class="page-intro__heading main-heading"><p>Настройки</p></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.page-intro {
  padding: 2rem 0 0.1rem;
  background: #f9f9fc;
}

.main-heading {
  margin: 1.5rem 0;
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
}

@media (min-width: 768px) {
  .main-heading {
    font-size: 3rem;
  }
}
</style>
