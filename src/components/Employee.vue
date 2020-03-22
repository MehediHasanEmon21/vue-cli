<template>

<div id="Employee">

    <h3>Employee List</h3>
    <ul>
        <li v-for="emp in employees" v-bind:key=emp.index>{{ emp }}</li>
    </ul>

</div>
    
</template>

<script>
export default {
    name: 'Employee',
    data(){
        return {
            message: "Employee List",
            employees: ["Employee 1","Employee 2","Employee 3"]
        }
    }

}
</script>