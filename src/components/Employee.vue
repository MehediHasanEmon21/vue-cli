<template>

    <div>
       
            <h3>Employee Form</h3>

        <p>
            <label for="">Employee Name</label>
            <input type="text">
        </p>

        <p>
            <label for="">Mobile</label>
            <input type="number">
        </p>

    </div>
    
</template>

<script>

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
  
    
}
</script>

<style scoped>

</style>