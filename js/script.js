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
    } ,

    //scrivo funzione per aggiungere una task. La funzione aggiunge un nuovo oggetto chiamato newTask con lo status "false". newTaskString è una variabile che si aggiorna ogni volta che l'utente inserisce qualcosa nell'input testuale. Unshift viene utilizzato per inserire questo nuovo object nell'array this.tasks
    addTask(){
      const newTask = {
        text: this.newTaskString,
        status: false
      }
      this.tasks.unshift(newTask);
    }

  }
}).mount('#app')

