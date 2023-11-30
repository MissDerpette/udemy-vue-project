<template>
    <div>
        <h1>This is skills Manager</h1>

        <skill-list 
            title="Front End Web Development" 
            :skills="myTechStacks.frontEnd" 
        />

        <skill-list 
            title="Libraries" 
            :skills="myTechStacks.libraries" 
        />

        <skill-list 
            title="Frameworks" 
            :skills="myTechStacks.Frameworks" 
        />

        <skill-list
            title="Cloud Services"
            :skills="myTechStacks.CloudServices"
        />

        <skill-list
            title="Others"
            :skills="myTechStacks.Others"
        />


    </div>
</template>

<script>
import SkillList from '../components/SkillList.vue'
export default {
    name: 'App',
    components: { SkillList },
    computed: {
        myTechStacks() {
            return this.$store.state.state.myTechStacks
        }
    }
}
</script>
