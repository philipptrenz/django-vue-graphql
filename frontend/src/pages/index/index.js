import Vue from 'vue'
import Index from './Index.vue'
import vuetify from '../../plugins/vuetify'
import { createProvider } from '../../vue-apollo'

Vue.config.productionTip = false

new Vue({
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(Index)
}).$mount('#app')
