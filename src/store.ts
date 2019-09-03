import Vue from "vue";
import Vuex from "vuex";
import { test } from "mocha";

Vue.use(Vuex);

interface IState {
  todos: ITodo[];
}

export interface ITodo {
  key: number;
  text: string;
  done: boolean;
}

const state: IState = {
  todos: [
    { key: 1, text: "Создать список дел", done: true },
    { key: 2, text: "Написать Роману", done: true }
  ]
};

const store = new Vuex.Store({
  state,
  mutations: {
    add(state, todo) {
      state.todos.unshift(todo);
    },
    delete(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
    doneChange(state, todo) {
      todo.done = !todo.done;
    }
  }
});

const global: any = window;
global.store = store;

export default store;
