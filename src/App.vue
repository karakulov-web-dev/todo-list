<template>
  <div id="app">
    <TodoList title="Список дел:" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "./components/TodoList.vue";

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 50%;
}
body {
  background: #f5f5f5;
}
</style>
