<template>
  <div class="family">
    <h1>This is a family page</h1>
    <ul>
      <li v-for="family in families" :key="family"
      > 
        <div class="addName"> {{ family }}  </div>
      </li>
    </ul>

      <InputForm />

  </div>
</template>

<script>
import InputForm from '../components/InputForm.vue'

export default {
  name: 'App',
  components: { InputForm },
  computed: {
    families(){
      return this.$store.state.families
    }
  }
}
</script>

<style>
li {
  list-style-type: none;
}
</style>