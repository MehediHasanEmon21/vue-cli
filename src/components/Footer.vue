<template>

  <div id="footer">
    
        <footer>
            {{footerMsg}}
        </footer>
   </div>
    
</template>

<script>

export default {
    name: 'Footer',
    data(){
        return {
            footerMsg: "Copyright @Online Web Tutor Developers 2018",
        }
    }
}
</script>

<style scoped>
footer{
        background: #3f51b5f2;
        padding: 7px;
        color: white;
        text-align: center;
    }

</style>