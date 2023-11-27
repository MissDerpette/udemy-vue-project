<template>
    <form @submit.prevent="submitFamilyForm">
        <label>Add/Update a member: </label>
        <input type="text" required v-model="member">
        <button type="submit">Confirm</button>
      </form>
  
      <div>
        <h3>Family Members</h3>
        <ul>
          <li v-for="(member, index) in $store.state.families" :key="index">
            {{ member }}
            <button @click="updateMember(index)">Update</button>
            <button @click="deleteMember(index)">Delete</button>
          </li>
        </ul>
      </div>
  </template>

<script>
export default {
  data() {
    return {
      member: '',
      selectedIndex: null
    };
  },
  methods: {
    submitFamilyForm() {
      if (this.selectedIndex === null) {
        this.$store.commit('addMember', this.member);
      } else {
        this.$store.commit('updateMember', {
          index: this.selectedIndex,
          updatedMember: this.member
        });
        this.selectedIndex = null; // Reset the selectedIndex after updating
      }
      this.member = ''; // Clear the input after adding/updating the member
    },
    updateMember(index) {
      this.member = this.$store.state.families[index];
      this.selectedIndex = index;
    },
    deleteMember(index) {
      this.$store.commit('deleteMember', index);
      this.selectedIndex = null; // Reset the selectedIndex after deleting
    }
  }
};
</script>

<style>

</style>