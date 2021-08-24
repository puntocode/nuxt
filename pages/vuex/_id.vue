<template>
  <div class="container">
    <h2 class="my-5">Editar Tarea</h2>

    <form class="my-4" @submit.prevent="editarTarea(tarea)">
      <input type="text" class="form-control mb-2" v-model="tarea.nombre">
      <button class="btn btn-warning">Editar</button>
    </form>


  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import {mapActions, mapState} from 'vuex';

  export default {
    fetch({params, store}){
      return db.collection('tareas').doc(params.id).get()
        .then(doc => {
          if(doc.exists){
            let tarea = doc.data();
            tarea.id = doc.id;
            return store.commit('setTareaIndividual', tarea)
          }else{
            return console.log('no se encuentra el documento...');
          }
        })
    },

    computed:{
      tarea:{
        get(){
          return {
            nombre: this.$store.state.tarea.nombre,
            id: this.$store.state.tarea.id,
            fecha: this.$store.state.tarea.fecha
          }
        },
        // set(valor){
        //   return this.$store.commit('setNombreTarea', valor)
        // }
      }
    },

    methods:{
      ...mapActions(['editarTarea'])
    }
  }
</script>


