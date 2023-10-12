<template>
    <div id="app" class="row">
        
        <div class="container-fluid px-4 text-center row gy-5 ">

            <p class="font-monospace">{{ pageTitle }}</p>

            <div id="increment">
                <button @click="increment"> + </button>
            </div>

            <div id="counter" class="font-monospace">
                {{ count }}
            </div>

            <div id="decrement">
                <button @click="decrement"> - </button>
            </div>

            <div id="reset">
                <button class="font-monospace" @click="reset"> Reset </button>
            </div>

        </div>
    </div>
</template>

<script>
Vue.createApp({
    data() {
        return {
            count: 0,
            pageTitle: 'Counter'
        };
    },
    methods: {
        increment() {
            console.log('i works')
            this.count++;
        },
        decrement() {
            console.log('d works')
            this.count--;
        },
        reset() {
            console.log('r works')
            // Object.assign(this.$data, this.$options.data());
            this.count = 0
        },
    },
}).mount('#app');