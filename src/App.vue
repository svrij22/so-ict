<template>
  <div id="app">
    <nav-bar/>
    <MatrixRain/>
  </div>
</template>

<script>
import MatrixRain from "@/components/MatrixRain";
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
    MatrixRain,
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
