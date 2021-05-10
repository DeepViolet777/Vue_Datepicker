
<template>
 <v-app id="inspire">
    <v-container>
      <v-row justify="center" >
        <v-col
          cols="12"
          lg="6"
        >
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedDateFormattedMomentjs"
                clearable
                v-bind="attrs"
                v-on="on"
                @click:clear="date = null"
              ></v-text-field>
            </template>
            <v-date-picker
             color="#82B1FF"
      header-color="#263238"
              v-model="date"
              @change="menu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Datepicker',

   data:() => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
   }),
    
   computed: {
    computedDateFormattedMomentjs () {
      return this.date ? moment(this.date).format('DD/MM/YYYY') : ''
    },
},
methods: {
  moment: function () {
    return moment();
  }
},

}
</script>
