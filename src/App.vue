<template>
  <v-app>
    <v-main>
      <Datepicker/>
    </v-main>
  </v-app>
</template>

<script>
import Datepicker from './components/Datepicker';

export default {
  name: 'App',

  components: {
    Datepicker,
  },

  data: () => ({
    //
  }),
};
</script>
