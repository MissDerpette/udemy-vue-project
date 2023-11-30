<template>
    <div>
        <h2> {{title}}</h2>
        <ul>
            <li v-for="item in skills" :key=item>
                     {{ item }}
             </li>
        </ul>
    </div>
</template>

<script>
import SkillsView from '../views/SkillsView.vue'
export default {
    name: 'App',
    components: { SkillsView },
    props : ['skills', 'title'],
    computed: {
        myTechStacks() {
            return this.$store.state.state.myTechStacks
        }
    }
}
</script>
