<template>

    <div>
       
        <h3>Employee Form</h3>

        <p>
            <label for="">Employee Name</label>
            <input type="text" v-model.lazy="employee.name">
        </p>

        <p>
            <label for="">Mobile</label>
            <input type="number" v-model.lazy="employee.mobile">
        </p>

        <p>
            <label for="">Designation</label>
            <input type="text" v-model.lazy="employee.designation">
        </p>

        <h3>Preview</h3>

        <p>Name : {{employee.name}}</p>
        <p>Mobile  : {{employee.mobile}}</p>
        <p>Designation : {{employee.designation}}</p>

    </div>
    
</template>

<script>

export default {

    props:{
        
    },
    name: 'Employee',
    data(){
        return {
            employee: {
                name: '',
                mobile: '',
                designation: '',
            }
        }
    },
    methods: {
        
    },
  
    
}
</script>

<style scoped>

</style>