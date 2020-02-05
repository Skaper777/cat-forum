<template>
  <div class="comment">
    <div class="comment__img">
      <img alt="comment-img">
    </div>
    <div class="comment__textblock">
      <p class="comment__name">{{name}}<span>промурчал</span></p>
      <p class="comment__text">{{text}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'comment',
  props: ['name', 'text', 'id'],
};
</script>


<style lang="scss" scoped>

</style>
