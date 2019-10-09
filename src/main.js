import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlagin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlagin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyCKFHB5BY0-UwlXgQkcYj-M1Vry_pYhN1E",
  authDomain: "first-vue-crm.firebaseapp.com",
  databaseURL: "https://first-vue-crm.firebaseio.com",
  projectId: "first-vue-crm",
  storageBucket: "",
  messagingSenderId: "1091655940654",
  appId: "1:1091655940654:web:d4358a7933860e11c3fdbf",
  measurementId: "G-KE0DZ3V2BM"
});

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


