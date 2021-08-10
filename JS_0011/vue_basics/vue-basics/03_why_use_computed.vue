<template>
  <div>
    <h1>Current time: {{ time }}</h1>
    <div>{{ message }}</div>
    <div>{{ reverseMessage(message) }}</div>
    <div>{{ reversedMsg }}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!',
            time: Date.now(),
        };
    },
    methods: {
        reverseMessage(value) {
            console.log("method 'reverseMessage' called");
            return value.split("").reverse().join("");
        }
    },
    computed: {
        reversedMsg() {
            console.log("computed 'reversedMsg' called");
            return this.message.split("").reverse().join("");
        }
    },
    // created, mounted
    // created() {
    mounted() {
        setInterval(() => {
            this.time = Date.now();
        }, 1000);
    }

    // created() {
    //     setTimeout(() => {
    //         this.time = Date.now();
    //     }, 1000);
    // },

    // // // updated
    // updated() {
    //     setTimeout(() => {
    //         this.time = Date.now();
    //     }, 1000);
    // },
}
</script>

<style>
body {
  background: #2e2e2e;
  color: #f9f9f9;
}
</style>
