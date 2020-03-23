<template>
  <div id="app">

    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    

    <button @click="component = 'student_component'">change to student component</button>
    <button @click="component = 'employee'">change to employee component</button>

  </div>
</template>

<script>
 
import Student from './components/Student.vue'
import Employee from './components/Employee.vue'
export default {
  name: 'App',
  components: {
    student_component: Student,
    employee: Employee,
  },
  data(){
    return {
      component: "student_component",
    }
  },
  methods: {
    
  }
  
}
</script>


