<template>

    <div id="posts">
        <a href="" :title="title | makeUpper">Go Google</a>
        <h3>Showing Post</h3>

        <div v-for="post in posts" :key="post.index">

            <h2>{{ post.title | makeUpper }}</h2>
            <p v-format>{{ post.body | cutText }}</p>

        </div>


    </div>
    
</template>

<script>
import filterMixin from '../mixin/filter';
export default {
    mixins: [
        filterMixin
    ],
    props:{
        
    },
    name: 'Post',
    data(){
        return {
          posts: [],
          title: 'go to google'
        }
    },
    methods: {
        
    },

    

    
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function(data){
                  this.posts = data.body.slice(0,5);
                })
  }
    
  
    
}
</script>

<style scoped>

#posts {
    margin-left: 30px;
}

</style>