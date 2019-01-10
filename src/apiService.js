import axios from 'axios'

export default new class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:3333/api'
    })
  }

  getArticles = async () => {
    return this.http.get(`/articles`)
  }

  storeArticle = async (article) => {
    return this.http.post(`/articles`, article)
  }

  deleteArticle = async (id) => {
    return this.http.delete(`/articles/${id}`)
  }
}

