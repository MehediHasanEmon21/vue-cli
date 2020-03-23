import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Product from './components/views/Product.vue'
import Contact from './components/views/Contact.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/about-us', component: About},
  {path: '/product', component: Product},
  {path: '/contacts', component: Contact},
]

const router = new VueRouter({
  routes: routes,
})

// Vue.directive('format',{
//   bind(el,binding,unbind){
//     el.style.color = 'blue'
//   }
// })



// Vue.mixin({

//   filters: {

//     cutText(value){
//         return value.slice(0,70)+'....'
//     },

//     makeUpper(value){
//         return value.toUpperCase()
//     }
// },

// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
