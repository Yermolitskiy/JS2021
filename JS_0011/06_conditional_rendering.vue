// template block should return single DOM node
<template>
  <div>
  <h1>Hey, {{ name }}!</h1>


  <h1>{{ name ? `hey, ${name}!`: 'hey!'}}!</h1>



  <h1></h1>
  <h1 v-if="name === 'Arturs'">Ola, {{ name }}!</h1>
  <h1 v-else-if="name">Hey, {{ name }}! </h1>

    <div>
      <label>Name:</label>
      <input v-model="name" />
    </div>

  </div>
</template>

<script>
export default  {
  data() {
    return {
      name: '',
    };
  }
}
</script>

<style>
body {
  background: #2e2e2e;
  color: #f9f9f9;
}
</style>
