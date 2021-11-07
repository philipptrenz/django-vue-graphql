import Vue from 'vue'
import Login from './Login.vue'
import vuetify from '../../plugins/vuetify'
import { createProvider } from '../../vue-apollo'

Vue.config.productionTip = false

new Vue({
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(Login)
}).$mount('#app')
