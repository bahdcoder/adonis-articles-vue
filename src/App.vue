<template>
  <div class="container">
    <h2 class="text-center my-5">
      Content Management App
    </h2>
    <div class="text-center my-5">
      <button
        @click="this.toggleCreateArticleComponent"
        class="btn btn-sm"
        :class="{'btn-info': !showCreateArticleComponent, 'btn-danger' : showCreateArticleComponent }"
      >
        {{ showCreateArticleComponent ? 'Cancel' : 'Create Article' }}
      </button>
    </div>
    <AddArticle v-if="showCreateArticleComponent" @article-saved="articleSaved" />
    <div class="row">
      <Article @delete-article="deleteArticle($event)" v-for="article in articles" :article="article" :key="article.id" />
    </div>
  </div>
</template>

<script>
  import apiService from '@/apiService'
  import Article from '@/components/Article'
  import AddArticle from '@/components/AddArticle'

  export default {
    components: {
      Article,
      AddArticle
    },
    mounted() {
      this.fetch()
    },
    data: () => ({
      articles: [],
      showCreateArticleComponent: false
    }),
    methods: {
      fetch() {
        apiService.getArticles().then(({ data }) => {
          this.articles = data.articles
        })
      },
      articleSaved() {
        this.fetch()
        this.toggleCreateArticleComponent()
      },
      toggleCreateArticleComponent() {
        this.showCreateArticleComponent = !this.showCreateArticleComponent
      },
      deleteArticle(article) {
        apiService.deleteArticle(article.id).then(this.fetch)
      }
    }
  }
</script>
