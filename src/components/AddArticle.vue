<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h4 class="text-center mb-5">Add new Article</h4>
        <div class="form-group">
          <input v-model="title" type="text" class="form-control" placeholder="Title" />
        </div>
        <div class="form-group">
          <input v-model="description" type="text" class="form-control" placeholder="Description" />
        </div>
        <div class="form-group">
          <textarea v-model="content" cols="30" rows="10" class="form-control" placeholder="Content"></textarea>
        </div>
        <div class="form-group">
          <label>Select publishing date</label>
          <flat-pickr
            :config="{ enableTime: true, }"
            class="form-control"
            v-model="published_at"
          ></flat-pickr>
        </div>
        <div class="form-group text-center">
          <button @click="saveArticle" class="btn btn-success">Create Article</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/apiService'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    // eslint-disable-next-line
    flatPickr
  },
  data: () => ({
    title: '',
    description: '',
    content: '',
    published_at: ''
  }),
  methods: {
    async saveArticle () {
      await apiService.storeArticle({
        title: this.title,
        description: this.description,
        content: this.content,
        published_at: this.published_at
      })
      
      this.$emit('article-saved')
    }
  }
}
</script>

