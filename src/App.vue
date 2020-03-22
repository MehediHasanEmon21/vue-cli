<template>
  <div id="app">

    <student_component></student_component>
    <employee></employee>

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
      
    }
  },
  methods: {
    
  }
  
}
</script>


