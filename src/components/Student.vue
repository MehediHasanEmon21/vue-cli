<template>

    <div>

        <h3>{{message}}</h3>
       
        <button @click="changeText">Change text</button>

    </div>
    
</template>

<script>
export default {

    props:{
        message: {
            type: String
        }
    },
    name: 'Student',
    data(){
        return {
            
        }
    },
    methods: {
        changeText(){
            this.$emit('updateValue','message is updated')
        }
    }
    
}
</script>

<style scoped>

</style>