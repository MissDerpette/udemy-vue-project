<template>
  <div class="family">
    <h1>This is a family page</h1>
    <ul>
      <li v-for="family in families" :key="family"
      > 
        <div class="name"> {{ family }}  </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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