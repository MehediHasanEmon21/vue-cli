<template>
  <div id="app">
    <topbar></topbar>
    <main_content v-bind:student-list="students" v-bind:test="test" channel-name="New Channel" name="Emon" v-bind:myplaylists="playlists"></main_content>
    <student_component v-bind:test="test" v-bind:student-list="students"></student_component>
    <footer_componemet></footer_componemet>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    topbar: Header,
    main_content: Content,
    footer_componemet: Footer,
    student_component: Student,
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

      students: ['Emon','Hasan','Sakib','Sumon'],
      test: 'This is String Type Value',
    }
  }
  
}
</script>


