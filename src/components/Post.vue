<template>
  <div ref="post" class="post">
    <div class="post__body">
      <img src="http://placekitten.com/130/130" alt="cat" />
      <p class="post__author">{{author}}</p>
      <p class="post__title">{{title}}</p>
      <p class="post__text">{{text}}</p>
    </div>
    <button
      ref="downloadBtn"
      @click="showComments"
      class="post__show-comments">Открыть комментарии</button>
    <div ref="comments" class="post__comments">
      <slot></slot>
      <button
        ref="closeBtn"
        @click="closeComments"
        class="post__show-comments post__show-comments--close">Скрыть комментарии</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'post',
  props: ['author', 'title', 'text'],
  data() {
    return {
      downloadData: false,
    };
  },
  methods: {
    showComments() {
      if (!this.downloadData) {
        this.$emit('showComments');
      }

      if (this.$refs.downloadBtn) {
        this.$refs.post.style = 'margin-bottom: 80px';
        this.$refs.comments.style.display = 'block';
        this.$refs.downloadBtn.style.display = 'none';
      }

      this.downloadData = true;
    },

    closeComments() {
      this.$refs.post.style = 'margin-bottom: 20px';
      this.$refs.comments.style.display = 'none';
      this.$refs.downloadBtn.style.display = 'block';
    },
  },
};
</script>


<style lang="scss" scoped>
.post {
  position: relative;
  margin-bottom: 20px;

  &__body {
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: auto auto auto;
    grid-auto-flow: row;
    background: rgb(212, 237, 243);
    padding: 20px;
    padding-bottom: 50px;
    border: 1px solid lightgrey;

    @media (max-width: 768px) {
      grid-template-columns: 110px auto;
      padding: 10px;
      padding-bottom: 35px;
    }
  }

  p {
    align-self: start;
  }

  img {
    grid-column: 1;
    grid-row: 1 / 4;

    @media (max-width: 768px) {
      width: 100px;
    }
  }

  &__author {
    margin-bottom: 10px;
    color: grey;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  &__title {
    margin-bottom: 7px;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  &__text {
    grid-column: 2;

    @media (max-width: 768px) {
      margin-top: 10px;
      grid-column: 1 / 3;
      font-size: 14px;
    }
  }

  &__show-comments {
    position: absolute;
    font-family: "Elephant", Helvetica, sans-serif;
    bottom: 20px;
    right: 20px;
    border: none;
    background: none;
    font-size: 18px;
    color: blue;
    cursor: pointer;

    &--close {
      bottom: -27px;
      right: 0;
      background: rgb(212, 237, 243);
      border: 1px solid lightgrey;
    }

    &:hover {
      text-decoration: underline;
    }

    @media(max-width: 768px) {
      font-size: 14px;
      bottom: 10px;
      right: 10px;

      &--close {
        bottom: -21px;
        right: 0;
      }
    }
  }

  &__comments {
    position: relative;
    display: none;
    width: 90%;
    margin: 0 auto;
  }
}

</style>
