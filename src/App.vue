<template>
  
  <div id="app">
    <NavBar class="navbar"/>
    <Ahorcado />
   
    <HelloWorld />

  </div>
</template>



<script>

  import NavBar from "@/components/navBar.vue";
  import HelloWorld from "./components/HelloWorld.vue";
  import Ahorcado from '@/components/Ahorcado.vue';

  export default {
    name: 'App',
    components: {
      NavBar, Ahorcado, HelloWorld
    },
  };

</script>

<style scoped>
  *{
    background-color: lightskyblue;
  } 

</style>