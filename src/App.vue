<template>
  <div id="app">

    <student_component>
      {{ msg }}
      <div slot="form-header">
          <h3>Student Form</h3>
      </div>

      <div slot="form-elements">
          <input type="text" placeholder="Name"><br><br>
          <input type="text" placeholder="Email"><br><br>
      </div>
      
      <div slot="form-button">
          <button @click="btnClick">Submit</button><br>
      </div>
      
      <div slot="form-footer">
         <p>This is form footer</p>
      </div>
    </student_component>

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
      msg : 'Hello Student',
    }
  },
  methods: {
    
  }
  
}
</script>


