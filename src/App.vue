<template>
  <div id="app" class="forum">
    <div class="forum__posts">
      <div v-for="(post) in posts" :key="post.title">
        <Post
          :author="checkAuthor(post.userId)"
          :title="post.title"
          :text="post.body"
          @showComments="getComments(post.id)">

          <div v-if="comments">
            <div v-for="comment in getCurrentCommetns(post.id)" :key="comment.name">
              <Comment :id="post.id" :name="comment.name" :text="comment.body">
              </Comment>
            </div>
          </div>

        </Post>
      </div>
    </div>
    <div class="forum__filters">
      <Filters></Filters>
    </div>
  </div>
</template>


<script>

import Filters from '@/components/Filters.vue';
import Post from '@/components/Post.vue';
import Comment from '@/components/Comment.vue';
import Axios from 'axios';

export default {
  name: 'app',

  data() {
    return {
      posts: [],
      usersId: [],
      comments: [],
    };
  },

  components: {
    Filters,
    Post,
    Comment,
  },

  methods: {
    checkAuthor(id) {
      let userName = '';

      this.usersId.forEach((user) => {
        if (user.id === id) {
          userName = user.name;
        }
      });

      return userName;
    },

    getComments(id) {
      Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res) => {
          this.comments.push(...res.data);
        });
    },

    getCurrentCommetns(postId) {
      const curComments = [];

      this.comments.forEach((com) => {
        if (com.postId === postId) {
          curComments.push(com);
        }
      });

      return curComments;
    },
  },

  mounted() {
    const prom1 = Axios.get('https://jsonplaceholder.typicode.com/posts');
    const prom2 = Axios.get('https://jsonplaceholder.typicode.com/users');

    Promise.all([prom1, prom2])
      .then((res) => {
        this.posts = res[0].data;
        this.usersId = res[1].data;
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
    max-width: 1240px;
    min-width: 280px;
    margin: 0 auto;
    padding: 20px;

    @media(max-width: 768px) {
      padding: 10px;
    }

    &__posts {
      width: 69%;

      @media(max-width: 1024px) {
        order: 2;
        width: 100%;
      }
    }

    &__filters {
      width: 30%;

      @media(max-width: 1024px) {
        order: 1;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }

    @media(max-width: 1024px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
</style>
