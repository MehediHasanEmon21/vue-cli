<template>

  <div id="content">
    <h2>{{ name }}</h2>
    {{ channelName }}
    <h3>Playlists</h3>
    <ul>
        <li v-for="playlist in myplaylists" v-bind:key="playlist.index"><a v-bind:href="playlist.link" v-bind:title="playlist.title" target="_blank">{{playlist.name}}</a></li>
    </ul>

     <h3>Student List</h3>
     <h4>{{ test }}</h4>
    <ul>
        <li v-for="st in studentList" v-bind:key="st.index">{{ st }}</li>
    </ul>
    <button @click="deleteStudent">Delete Student</button>

</div>
    
</template>

<script>

export default {
    name: 'Content',
    props: {
        studentList: {
            type: Array
        },
        name: {
            type: String,
        },
        myplaylists: {
            type: Array,
        },
        channelName: {
            type: String
        },
        test: {
            type: String
        }
    },
    data(){
        return {

            

        }
    },
    methods: {
        deleteStudent(){
            this.studentList.pop()
        }
    }
}
</script>

<style scoped>

       #content{
              text-align: center;
            }

            #content ul{
                list-style: none;
            }

            #content ul li{
                font-size: 19px;
                padding: 6px;
                color: #38190e;
            }

            #content h3{
                text-align: center;
            }

</style>