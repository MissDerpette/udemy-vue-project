<template>
  <h1>This is ABOUT ME page</h1>

  <h2>{{ fullName }}</h2>
  <h3> {{ position }} </h3>
  <p> {{ aboutMe }} </p>
  <p> {{ experience }} </p>
</template>

<script>
export default {
    data() {
        return {
            fullName : 'Kirstine Pineda',
            position: 'Front End Developer',
            aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',  
            experience: 'no experience yet'         
        }
    }

}
</script>

<style>

</style>