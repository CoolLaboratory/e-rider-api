import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

(async () => await import(/* webpackChunkName: "firebase" */ './firebase').then(module => {
  /**@type {import('firebase').default} */
  const firebase = module.default

  Vue.config.productionTip = false

  /**@type {import('firebase').default.firestore.Firestore} */
  Vue.prototype.$firestore = firebase.firestore()
  Vue.prototype.$messaging = firebase.messaging()
  Vue.prototype.$storage = firebase.storage()
  Vue.prototype.$auth = firebase.auth()
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}))()
