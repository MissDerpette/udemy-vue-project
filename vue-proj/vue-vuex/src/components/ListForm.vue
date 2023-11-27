<template>
    <form @submit.prevent="submitToDoList">
        <label>Add here: </label>
        <input type="text" required v-model="list"> 
        <button type="submit">Add</button>
    </form>

    <div>
        <h3>To do list here</h3>
        <ul>
            <li v-for="(list, index) in $store.state.todoLists" :key="index">
              {{ list }}
              <button @click="updateList(index)">Update</button>
              <button @click="deleteList(index)">Delete</button>
            </li>
          </ul>
    </div>

</template>

<script>
export default {
    data() {
        return {
            list: '',
            selectedIndex: null
        };
    },
    methods: {
        submitToDoList(){
            if (this.selectedIndex === null) {
                this.$store.commit('addList', this.list);
            } else {
                this.$store.commit('updateList', {
                    index: this.selectedIndex,
                    updatedList: this.list
                });
                this.selectedIndex = null;
            }
            this.member = '';
        },
        updateList(index){
            this.list = this.$store.state.todoLists[index];
            this.selectedIndex = index;
        },
        deleteList(index) {
            this.$store.commit('deleteList', index);
            this.selectedIndex = null;

        }
    }
}
</script>

<style>

</style>