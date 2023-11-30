<template>
    <div>
        <h2>  Test  </h2>
    </div>
</template>

<script> 
import ProjectView from '../views/ProjectView.vue'
export default {
    name: 'App',
    component: { ProjectView },
    props: [
        'projectName', 'projectDesc', 
        'techUsed',
        'githubUrl',
        'img'
    ]
}
</script>



<style>

</style>