<template>
  <div class="filters">
    <p class="filters__title">Фильтры</p>
    <label class="filters__filter" for="name">
      <p>Имя/Название</p>
      <input type="text" id="name">
    </label>
    <label class="filters__filter" for="content">
      <p>Контент</p>
      <input type="text" id="content">
    </label>
  </div>
</template>


<script>
export default {
  name: 'filters',
};
</script>


<style lang="scss" scoped>
  .filters {
    background: lightgrey;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    &__title {
      font-size: 24px;
      margin-bottom: 20px;
    }

    &__filter {
      p {
        font-size: 20px;
        margin-bottom: 7px;
      }

      input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        width: 70%;
        margin-bottom: 10px;
      }
    }
  }
</style>
