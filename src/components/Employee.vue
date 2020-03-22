<template>

    <div>
       
        <h3>{{ message }}</h3>

    </div>
    
</template>

<script>
import {EventBus} from '../main'
export default {

    props:{
        
    },
    name: 'Employee',
    data(){
        return {
            message: 'default message'
        }
    },
    methods: {
        
    },
    mounted(){
        EventBus.$on("emmitedData", data => {
            this.message = data
        })
    }
    
}
</script>

<style scoped>

</style>