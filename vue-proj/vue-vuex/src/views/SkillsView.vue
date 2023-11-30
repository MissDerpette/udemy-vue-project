<template>
  <div> <h1> This is Skills page</h1>
    
    <TechSkills />
</div>
</template>

<script>
import TechSkills from '../components/TechSkillsManager.vue'
export default {
    name: 'App',
    components: { TechSkills },
    computed: {
        myTechStacks() {
            return this.$store.state.myTechStacks
        }
    }
}
</script>
