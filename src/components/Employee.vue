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

        <p>
            <input type="checkbox" value="Developer" v-model="employee.posts">Developer
            <input type="checkbox" value="Designer" v-model="employee.posts">Designer
            <input type="checkbox" value="Writer" v-model="employee.posts">Writer
            <input type="checkbox" value="Broker" v-model="employee.posts">Broker
        </p>

        <h3>Preview</h3>

        <p>Name : {{employee.name}}</p>
        <p>Mobile  : {{employee.mobile}}</p>
        <p>Designation : {{employee.designation}}</p>
        <p>Post :
            <ul>
                <li v-for="post in employee.posts" :key="post.index">{{ post }}</li>
            </ul>
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
            employee: {
                name: '',
                mobile: '',
                designation: '',
                posts: []
            }
        }
    },
    methods: {
        
    },
  
    
}
</script>

<style scoped>

</style>