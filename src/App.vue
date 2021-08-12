<template>
  <div id="app" data-cy="application-wrapper">
    <Translator apikey="AIzaSyDgtCLQ8h8UYMSQWhPg08PBJA9WBKBlhCg" />
  </div>
</template>

<script>
import Translator from "./components/Translator.vue";

export default {
  name: "app",
  components: {
    Translator
  }
};
</script>

<style>
#app {
  font-family: system-ui,"Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
