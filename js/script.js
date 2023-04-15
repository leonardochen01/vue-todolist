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
  }
}).mount('#app')

