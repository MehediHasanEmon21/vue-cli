import Vue from 'vue'
import App from './App.vue'
import Student from './components/Student.vue'

Vue.component('student',Student);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
