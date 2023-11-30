<template>
    <div>

        <h1>This is Project Manager</h1>

        <projectList
            projectName=""
            projectDesc=""
            techUsed=""
            githubUrl=""
            img=""
        />


    </div>
</template>

<script>
import ProjectList from '../components/ProjectList.vue'
export default {
    name: 'App',
    components: { ProjectList },
}

</script>
