import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMoment from 'vue-moment'

Vue.use(require("vue-moment"));

Vue.config.productionTip = false

new Vue({
   vuetify,
   VueMoment,
  render: h => h(App)
}).$mount('#app')

