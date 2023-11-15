<template>
    <h1>This is a to do list page.</h1>

    <form>
        <label>Type here:</label>
        <input type="text" v-model="list">
        <button type="submit">Add</button>

    </form>
  
</template>

<script>
export default {
    data() {
        return {
            list: '',
        }
    }
}
</script>

<style>

</style>