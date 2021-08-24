<template>
  <div class="container my-5">
    <h1>Blog</h1>
    <ul>
      <li v-for="articulo in articulos" :key="articulo.id">
        <nuxt-link :to="`/blog/${articulo.id}`">{{ articulo.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data() {
    return {
      // articulos: [
      //   {id: 1, titulo: 'Titulo #1'},
      //   {id: 2, titulo: 'Titulo #2'},
      //   {id: 3, titulo: 'Titulo #3'},
      //   {id: 4, titulo: 'Titulo #4'},
      // ]
      articulos: []
    }
  },
  async created () {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    this.articulos = res.data;
  },
}
</script>

