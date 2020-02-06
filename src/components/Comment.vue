<template>
  <div class="comment">
    <div class="comment__img">
      <img src="http://placekitten.com/50/80" alt="comment-img">
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
  .comment {
    display: flex;
    padding: 15px;
    background: rgb(212, 237, 243);
    border: 1px solid lightgrey;
    border-top: none;

    @media (max-width: 768px) {
      padding: 10px;
    }

    &__img {
      margin-right: 10px;
    }

    &__name {
      font-size: 20px;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 16px;
      }

      span {
        color: grey;
        font-size: 16px;
        font-weight: bold;
        margin-left: 10px;

        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    &__text {
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
</style>
