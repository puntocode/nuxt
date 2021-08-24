import {db} from '@/plugins/firebase.js'

export const state = () => ({
  tareas: '',
  tarea: ''
})

export const mutations = {
  setTareas(state, payload){
    state.tareas = payload;
  },
  setTarea(state, payload){
    state.tareas.push(payload);
  },
  eliminarTarea(state, payload){
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas.splice(index, 1);
  },
  actualizarTareas(state, payload){
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas[index].nombre = payload.nombre;
  },
  setTareaIndividual(state, payload){
    state.tarea = payload
  }
}

export const actions = {
  async agregarTarea({commit}, payload){
    const doc = await db.collection('tareas').add({
      nombre: payload,
      fecha: new Date()
    });

    commit ('setTarea', {nombre: payload, id: doc.id})
  },

  borrarTarea({commit}, payload){
    db.collection("tareas").doc(payload.id).delete().then(function() {
      commit('eliminarTarea', payload)
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  },

  editarTarea({commit, dispatch}, payload){
    db.collection('tareas').doc(payload.id).update({
      nombre: payload.nombre
    }).then(()=>{
      commit('actualizarTareas', payload)
      this.app.router.push('/vuex');
    })
  },

  nuxtServerInit({commit}, {req}){
    return db.collection('tareas').get()
      .then(query => {
        const tareas = [];

        query.forEach( element => {
          let tarea = element.data();
          tarea.id = element.id;
          tareas.push(tarea)
        });

        return commit('setTareas', tareas);
      })
      .catch( error => console.log(error))
  }
}
