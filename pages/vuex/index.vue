<template>
  <div class="container">
    <h2 class="my-5">Tareas</h2>

    <form class="my-4" @submit.prevent="agregarTarea(tarea)">
      <input type="text" class="form-control mb-2" v-model="tarea">
      <button class="btn btn-primary">Agregar</button>
    </form>


    <ul class="list-group">
      <li class="list-group-item" v-for="item in tareas" :key="item.id">
        {{ item.nombre }}
        <nuxt-link class="btn btn-primary" :to="`/vuex/${item.id}`">Editar</nuxt-link>
        <button class="btn btn-danger" @click="borrarTarea(item)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { db } from '@/plugins/firebase.js'
  import { mapState, mapActions } from "vuex";

  export default {
    data() {
      return {
        tarea: ''
      }
    },

    // fetch({store}){
    //   return db.collection('tareas').get()
    //     .then( query => {
    //       const tareas = [];

    //       query.forEach( element =>{
    //         tareas.push(element.data())
    //       });

    //       return store.commit('setTareas', tareas);
    //     })
    //     .catch( error => console.log(error) )
    // },
    computed: {
      ...mapState(['tareas']) //nombre del state
    },
    methods:{
      ...mapActions(['agregarTarea', 'borrarTarea'])
    }
  }

</script>

<style lang="scss" scoped>

</style>
