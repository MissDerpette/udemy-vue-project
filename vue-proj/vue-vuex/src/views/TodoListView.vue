<template>
    <div class="todoList">
        <h1>Your To Do List today </h1>
        <ul>
            <li v-for="todoList in todoLists" :key="todoList"
            >
                <div class="addToDo"> {{ todoList }} </div>
            </li>
        </ul>


        <ListForm />

    </div>
</template>

<script>
import ListForm from '../components/ListForm.vue'

export default {
    name: 'App',
    components: { ListForm },
    computed: {
        todoLists(){
            return this.$store.state.todoLists
        }
    }
}
</script>

<style>

</style>