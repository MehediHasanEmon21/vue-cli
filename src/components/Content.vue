<template>

  <div id="content">
    <h2>{{ name }}</h2>
    {{ channelName }}
    <h3>Playlists</h3>
    <ul>
        <li v-for="playlist in myplaylists" v-bind:key="playlist.index"><a v-bind:href="playlist.link" v-bind:title="playlist.title" target="_blank">{{playlist.name}}</a></li>
    </ul>
</div>
    
</template>

<script>

export default {
    name: 'Content',
    props: {
        name: {
            type: String,
        },
        myplaylists: {
            type: Array,
        },
        channelName: {
            type: String
        }
    },
    data(){
        return {

            

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