<template>
  <article-modal @close="toggleModal" :modalActive="modalActive" :currentArticle="currentArticle"/>
  <div class="articles-section">
    <div class="article" v-for="article in articles" :key="article.url" @click="toggleModal(article)">
      <img alt="Article Image" :src="article.urlToImage || 'https://deliveryapp.neemo.com.br/entrar/2606'"
           @error="replaceByDefault"/>
      <h3 class="title">{{ article.title }}</h3>
      <div class="bottom-article">
        <label>{{ moment(article.publishedAt) }}</label>
        <label>{{ article.source.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>

import {store} from "@/store/store";
import moment from "moment"
import ArticleModal from './ArticleModal.vue'

export default {
  name: 'ArticlesItem',
  components: {
    ArticleModal,
  },
  data() {
    return {
      currentArticle: {},
      modalActive: false
    }
  },
  methods: {
    moment: function (date) {
      return moment(date).startOf('hour').fromNow();
    },
    replaceByDefault(e) {
      e.target.src = 'https://deliveryapp.neemo.com.br/entrar/2606'
    },
    toggleModal: function (article) {
      this.currentArticle = article
      this.modalActive = !this.modalActive;
    }
  },
  computed: {
    articles() {
      console.log(this.$store.state.articles)
      return this.$store.state.articles
    }
  },
  created() {
    store.dispatch('fetchArticles')
  }
}
</script>

<style scoped lang="scss">

.articles-section {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  .article {
    background: #23252F;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border: none;
    border-radius: 4px;
    width: 400px;
    height: 200px;
    cursor: pointer;
    position: relative;

    img {
      width: 400px;
      height: 200px;
      border-radius: 4px;
      filter: brightness(50%);
      transition: all 0.3s ease-in-out;

      &:hover {
        filter: brightness(100%);
      }
    }

    .title {
      margin: -104px 0 32px 0;
      font-size: 16px;
      padding: 0 24px;
      color: white;
      height: 66px;
      z-index: 1;
    }

    .bottom-article {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      width: 90%;
      position: absolute;
      bottom: 8px;

      label {
        color: white;
      }
    }
  }
}

</style>
