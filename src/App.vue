<template>
  <div id="app">
    <student></student>
    <employee></employee>
  </div>
</template>

<script>
import Employee from './components/Employee.vue';
export default {
  name: 'App',
  components: {
    employee: Employee
  }
  
}
</script>


