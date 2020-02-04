<template>
  <div id="app" class="forum">
    <div class="forum__posts">
      <Post></Post>
    </div>
    <div class="forum__filters">
      <Filters></Filters>
    </div>
  </div>
</template>


<script>

import Filters from '@/components/Filters.vue';
import Post from '@/components/Post.vue';
import Axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      posts: [],
      users: [],
    };
  },
  components: {
    Filters,
    Post,
  },

  mounted() {
    const prom1 = Axios.get('https://jsonplaceholder.typicode.com/posts');
    const prom2 = Axios.get('https://jsonplaceholder.typicode.com/users');

    Promise.all([prom1, prom2])
      .then((res) => {
        this.posts = res[0].data;
        this.users = res[1].data;
      });
  },
};

</script>


<style lang="scss">
  body {
    margin: 0;
  }

  p {
    margin: 0;
  }

  .forum {
    display: flex;
    justify-content: space-between;
    min-width: 320px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px;

    &__posts {
      width: 65%;

      @media(max-width: 768px) {
        order: 2;
        width: 100%
      }
    }

    &__filters {
      width: 32%;

      @media(max-width: 768px) {
        order: 1;
        width: 100%
      }
    }

    @media(max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
</style>
