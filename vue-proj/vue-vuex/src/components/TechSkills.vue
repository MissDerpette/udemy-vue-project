<template>
    <div><h1>This is skills component</h1>
        <ul>
            <li v-for="myTechStack in myTechStacks"
            :key="myTechStack"
            >
                 <div class="myTech">
                     {{ myTechStack }}
                 </div>
             </li>
        </ul>
    </div>
</template>

<script>
import SkillsView from '../views/SkillsView.vue'
export default {
    name: 'App',
    components: { SkillsView },
    computed: {
        myTechStacks() {
            return this.$store.state.state.myTechStacks
        }
    }
}
</script>
