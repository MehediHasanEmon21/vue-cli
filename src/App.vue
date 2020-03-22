<template>
  <div id="app">

    <student_component v-bind:message="message" @updateValue="updateValueInParent($event)"></student_component>

  </div>
</template>

<script>

import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    student_component: Student,
  },
  data(){
    return {
      message: 'This is data from Parent Component',
    }
  },
  methods: {
    updateValueInParent(updateValue){
      this.message = updateValue;
    }
  }
  
}
</script>


