<template>

  <div id="content">
    <h3>Playlists</h3>
    <ul>
        <li v-for="playlist in playlists" v-bind:key="playlist.index"><a v-bind:href="playlist.link" v-bind:title="playlist.title" target="_blank">{{playlist.name}}</a></li>
    </ul>
</div>
    
</template>

<script>

export default {
    name: 'Content',
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