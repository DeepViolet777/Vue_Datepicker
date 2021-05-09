<template>
    <div id="app">
  <v-app id="inspire">
    <v-row justify="center">
      <v-date-picker 
      v-model="date"
      color="#82B1FF"
      header-color="#263238"
      ></v-date-picker>
    </v-row>
     {{date}}
  </v-app>
</div>
</template>

<script>

export default {
    name: 'Datepicker',

    data(){
   return{
    date: new Date().toISOString().substr(0, 10),
    newDate:"",
}
    },

    methods:{
    
     
    }

   
}
</script>
