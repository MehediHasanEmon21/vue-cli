<template>
  <div id="app">
    <topbar></topbar>
    <main_content></main_content>
    <footer_componemet></footer_componemet>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    topbar: Header,
    main_content: Content,
    footer_componemet: Footer,
  }
  
}
</script>


