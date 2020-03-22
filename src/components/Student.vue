<template>

    <div>

        <h3>Student List</h3>
        <h4>{{ test }}</h4>
        <ul>
            <li v-for="st in studentList" v-bind:key="st.index">{{ st }}</li>
        </ul>
        <button @click="changeText">Change text</button>

    </div>
    
</template>

<script>
export default {

    props:{
        studentList: {
            type: Array
        },
        test: {
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
            this.test = 'message is change'
        }
    }
    
}
</script>

<style scoped>

</style>