// template block should return single DOM node
<template>
  <div>
    <div>{{ message }}</div>
    <div>{{ reverseMessage(message) }}</div>
    <div>{{ reversedMsg }}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!'
        };
    },
    methods: {
        reverseMessage(value) {
            return value.split("").reverse().join("");
        }
    },
    computed: {
        reversedMsg() {
            return this.message.split("").reverse().join("");
        }
    },
}
</script>

<style>
body {
    background: #2e2e2e;
    color: #f9f9f9;
}
</style>
