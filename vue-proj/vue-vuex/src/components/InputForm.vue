<template>
    <form @submit.prevent="addMember">
      <label>Add a member: </label>
      <input type="text" required v-model="member">
      <button type="submit">Confirm</button>
    </form>
  
    <p>New member: {{ member }}</p>
  </template>

<script>
export default {
    data(){
        return {
            member: ''
        }
    },
    methods: {
        addMember() {
            this.$store.commit('addMember', this.member);
            this.member = ''; 
        }
    }
}
</script>

<style>

</style>