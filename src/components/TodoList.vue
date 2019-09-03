<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <input
      type="text"
      v-on:keyup.enter="add"
      v-model="text"
      placeholder="Что необходимо сделать?"
    />
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.key"
        @click="doneSwitch(todo)"
      >
        <img
          v-bind:src="getCheckBoxImg(todo.done)"
          class="checkbox icon"
        />
        {{todo.text}}
        <img
          class="delete icon"
          v-bind:src="deleteIcon"
          @click="rm(todo)"
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITodo } from "../store";

@Component
export default class TodoList extends Vue {
  @Prop() private title!: string;
  private text: string = "";
  private deleteIcon: string = "./img/baseline_delete_black_18dp.png";
  getCheckBoxImg(done: boolean) {
    return done
      ? "./img/baseline_check_box_black_18dp.png"
      : "./img/baseline_check_box_outline_blank_black_18dp.png";
  }
  add() {
    const { text } = this,
      key = Math.random(),
      done = false;
    if (!text) return;
    this.$store.commit("add", { text, key, done });
  }
  rm(todo: ITodo) {
    this.$store.commit("delete", todo);
  }
  doneSwitch(todo: ITodo) {
    let { done } = todo;
    done = !done;
    this.$store.commit("doneChange", done);
  }
  get todos() {
    return this.$store.state.todos;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
  margin: 0px 0px 2px 0px;
}
li {
  list-style-type: none;
  padding: 20px 0px 20px 80px;
  text-align: left;
  color: #2c3e50;
  font-weight: bold;
  border-bottom: 1px solid #2c3e50;
  position: relative;
}
.icon {
  position: absolute;
  cursor: pointer;
}
.checkbox {
  left: 10px;
  top: 10px;
}
.delete {
  right: 10px;
  top: 10px;
}
.card {
  border: 1px solid #dadada;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  margin: 0 auto;
  overflow: hidden;
}
.card:hover {
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2);
}

input {
  transition: 0.25s border ease-in-out;
  border-radius: 0 !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent;
  color: #2c3e50;
  border: 0;
  border-bottom: 2px solid #999;
  font-size: 20px;
  padding-left: 80px;
  width: 100%;
}

input:focus {
  border-bottom-color: #2c3e50;
}
</style>
