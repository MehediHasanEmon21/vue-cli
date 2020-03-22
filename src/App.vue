<template>
  <div id="app">
    <topbar></topbar>
    <main_content channel-name="New Channel" name="Emon" v-bind:myplaylists="playlists"></main_content>
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
  },
  data(){
    return {
      playlists: [
                {
                    name: 'Wordpress Plugin Development',
                    title: 'Wordpress Plugin Development',
                    link: 'https://github.com/owthub/wordpress-plugin',

                },

                {
                    name: 'Wordpress Theme Development',
                    title: 'Wordpress Plugin Development',
                    link: 'https://github.com/owthub/wordpress-plugin',

                },

                {
                    name: 'Vue Js2 Development',
                    title: 'Wordpress Plugin Development',
                    link: 'https://github.com/owthub/wordpress-plugin',

                },

                {
                    name: 'Plugin Boilerplate',
                    title: 'Wordpress Plugin Development',
                    link: 'https://github.com/owthub/wordpress-plugin',

                },
            ],
    }
  }
  
}
</script>


