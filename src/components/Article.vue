<template>
  <div class="col-md-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ article.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ article.description }}</h6>
        <button @click="$emit('delete-article', article)" class="btn btn-danger btn-sm float-right">Delete Article</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>
