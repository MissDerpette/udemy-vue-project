<template>
    <div>
        <h1>This is skills Manager</h1>

        <SkillList 
            title="Front End Web Development" 
            :skills="myTechStacks.frontEnd" 
        />

        <SkillList 
            title="Libraries" 
            :skills="myTechStacks.libraries" 
        />

        <SkillList
            title="Frameworks" 
            :skills="myTechStacks.Frameworks" 
        />

        <SkillList
            title="Cloud Services"
            :skills="myTechStacks.CloudServices"
        />

        <SkillList
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
