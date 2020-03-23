<template>

    <div>
       <slot></slot>
       <div id="form-header">

           <slot name="form-header"></slot>

       </div>

        <div id="form-elements">

           <slot name="form-elements"></slot>

       </div>

        <div id="form-button">

           <slot name="form-button"></slot>

       </div>

        <div id="form-footer">

           <slot name="form-footer"></slot>

       </div>

    </div>
    
</template>

<script>

export default {

    props:{
        
    },
    name: 'Student',
    data(){
        return {
            
        }
    },
    methods: {
       
    }
    
}
</script>

<style scoped>

</style>