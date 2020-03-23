<template>
  <div id="app">

    <post></post>

  </div>
</template>

<script>
 
import Post from './components/Post.vue'

export default {
  name: 'Post',
  components: {
    post: Post,
  },
  data(){
    return {
      posts: []
    }
  },
  methods: {
    
  },

  
}
</script>


