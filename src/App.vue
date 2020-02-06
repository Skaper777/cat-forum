<template>
  <div id="app" class="forum">
    <div class="forum__posts">
      <div v-for="(post) in filteredPosts" :key="post.title">
        <Post
          :author="checkAuthor(post.userId)"
          :title="post.title"
          :text="post.body"
          @showComments="getComments(post.id)"
        >
          <div v-if="comments">
            <div v-for="comment in getCurrentComments(post.id)" :key="comment.name">
              <Comment :id="post.id" :name="comment.name" :text="comment.body"></Comment>
            </div>
          </div>
        </Post>
      </div>
    </div>
    <div class="forum__filters">
      <div class="filters">
        <p class="filters__title">Фильтры</p>
        <label class="filters__filter" for="name">
          <p>Имя/Название</p>
          <input type="text" v-model="searchName" id="name" />
        </label>
        <label class="filters__filter" for="content">
          <p>Контент</p>
          <input type="text" v-model="searchText" id="content" />
        </label>
      </div>
    </div>
  </div>
</template>


<script>

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
      searchName: '',
      searchText: '',
    };
  },

  components: {
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
      Axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      ).then((res) => {
        this.comments.push(...res.data);
      });
    },

    getCurrentComments(postId) {
      const curComments = [];

      this.comments.forEach((com) => {
        if (com.postId === postId) {
          curComments.push(com);
        }
      });

      return curComments;
    },
  },

  computed: {
    filteredPosts() {
      const filteredArray = this.posts.filter((post) => {
        const name = this.checkAuthor(post.userId);
        return name.indexOf(this.searchName) !== -1;
      });
      return filteredArray.filter((item) => item.body.indexOf(this.searchText) !== -1);
    },
  },

  watch: {},

  mounted() {
    const prom1 = Axios.get('https://jsonplaceholder.typicode.com/posts');
    const prom2 = Axios.get('https://jsonplaceholder.typicode.com/users');

    Promise.all([prom1, prom2]).then((res) => {
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

  @media (max-width: 768px) {
    padding: 10px;
  }

  &__posts {
    width: 69%;

    @media (max-width: 1024px) {
      order: 2;
      width: 100%;
    }
  }

  &__filters {
    width: 30%;

    @media (max-width: 1024px) {
      order: 1;
      width: 70%;
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
  }
}

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
