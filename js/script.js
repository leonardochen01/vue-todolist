const { createApp } = Vue;

createApp({
  data(){  

    return{

      //scrivo array di oggetti delle tasks

      tasks:[
        {
          text: 'Comprare il latte',
          status: false
        },
        {
          text: 'Portare fuori il cane',
          status: false
        },
        {
          text: 'Fare il bucato',
          status: false
        }
      ]
    }
  },

  methods:{

    //scrivo funzione per rimuovere una task. Utilizzo lo splice per rimuovere oggetto dall'array, prendendo indice e numero di elementi da rimuovere.
    removeTask(index){
      this.tasks.splice(index,1)
    } 

  }
}).mount('#app')

