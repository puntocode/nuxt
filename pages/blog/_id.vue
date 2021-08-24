<template>
  <div class="container">
    <h1>Detalle del articulo: {{ articulo.id }}</h1>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ articulo.title }}</h5>
        <small>Autor: {{ articulo.nombreAutor }}</small>
        <p class="card-text">{{ articulo.body }}.</p>
        <nuxt-link to="/blog">Volver</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articulo: {}
    }
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      const articulo = res.data;

      const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
      articulo.nombreAutor = resAutor.data.name;

      return {articulo};
    } catch (error) {
      console.log(error);
      return {error: error}
    }
  },
}
</script>
