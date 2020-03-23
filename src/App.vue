<template>
  <div id="app">

    <employee></employee>

  </div>
</template>

<script>
 
import Employee from './components/Employee.vue'

export default {
  name: 'App',
  components: {
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


