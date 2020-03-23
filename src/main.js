import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.directive('format',{
  bind(el,binding,unbind){
    el.style.color = 'blue'
  }
})

Vue.filter('makeUpper',function(value){
  return value.toUpperCase();
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
