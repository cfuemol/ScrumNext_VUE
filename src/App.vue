<template>
  
  <div id="app">
    <NavBar />
   
    <HelloWorld />

  </div>
</template>



<script>

  import NavBar from "@/components/navBar.vue";
import HelloWorld from "./components/HelloWorld.vue";

  export default {
    name: 'App',
    components: {
      NavBar, HelloWorld,
    },
  };

</script>

<style scoped>
  .body{
    background-color: lightskyblue;
    width: 150px;
    height: 150px;
  }

</style>