<script setup>
import { provide, ref, watch } from 'vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';

// data
let todos = ref(JSON.parse(localStorage.getItem('todos')) || []);

// function
function addTodo(todoObj) {
  todos.value.unshift(todoObj);
}

function checkTodo(id) {
  todos.value.forEach(todo => {
    if (todo.id === id) todo.done = !todo.done;
  });
}

function deleteTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

function checkAllTodo(done) {
  todos.value.forEach(todo => {
    todo.done = done;
  });
}

function clearAllTodo() {
  console.log('---------');
  todos.value = todos.value.filter(todo => {
    return !todo.done;
  });
}

// commuicate
provide('checkTodo', checkTodo);
provide('deleteTodo', deleteTodo);

// watch
watch(
  todos,
  (newValue, oldValue) => {
    localStorage.setItem('todos', JSON.stringify(newValue));
  },
  { deep: true }
);
</script>

<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
