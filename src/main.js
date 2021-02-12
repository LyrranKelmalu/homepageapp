import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: 'AIzaSyADLwiG_eQ8Ee6GUnPg_9tSRS6CgUxG-gk',
  authDomain: 'portfolioapp-5a7e2.firebaseapp.com',
  databaseURL: 'https://portfolioapp-5a7e2.firebaseio.com',
  projectId: 'portfolioapp-5a7e2',
  storageBucket: 'portfolioapp-5a7e2.appspot.com',
  messagingSenderId: '137720367803',
  appId: '1:137720367803:web:214f357733d9b6573a779e'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
