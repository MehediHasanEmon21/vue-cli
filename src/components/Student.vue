<template>

    <div id="student">

        <h3>{{ message }}</h3>

        <ul>
            <li v-for="st in students" v-bind:key="st.index">{{ st }}</li>
        </ul>



    </div>
    
</template>

<script>
export default {

    name: 'Student',
    data(){
        return {
            message: 'Student list',
            students: ['Afif','Arman','Aman','Sabi']
        }
    }
    
}
</script>