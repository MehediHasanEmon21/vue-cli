<template>

    <div id="posts">
       
        <h3>Showing Post</h3>

        <div v-for="post in posts" :key="post.index">

            <h2>{{ post.title }}</h2>
            <p v-format>{{ post.body }}</p>

        </div>


    </div>
    
</template>

<script>

export default {

    props:{
        
    },
    name: 'Post',
    data(){
        return {
          posts: []
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