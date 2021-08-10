// template block should return single DOM node
<template>
  <div>
  <h1>Current time: {{time}}</h1>
    <div> {{ message }} </div>
    <div> {{reverseMessage(message)}} </div>
    <div> {{reversedMsg}} </div>

  </div>
</template>

<script>
export default  {
  data() {
    return {
      message: 'hello from message',
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
      return this.message.split("").reverse().join("");
    }
  },
  // created, unmounted
  mounted() {
    setInterval(() => {
      this.time = Date.now();
    }, 1000);
  },

  // updated
// updated() {
//     setTimeout(() => {
//       this.time = Date.now();
//     }, 1000)
//   }
}
</script>

<style>
body {
  background: #2e2e2e;
  color: #f9f9f9;
}
</style>
