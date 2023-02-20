<script setup>
import { inject } from 'vue';

const props = defineProps(['todo']);
const emit = defineEmits(['checkTodo', 'deleteTodo']);

const checkTodo = inject('checkTodo', Function, false);
const deleteTodo = inject('deleteTodo', Function, false);

function handleCheck(id) {
  //通知App组件将对应的todo对象的done值取反
  checkTodo(id);
}
function handleDelete(id) {
  if (confirm('确定删除吗？')) {
    //通知App组件将对应的todo对象删除
    deleteTodo(id);
  }
}
</script>

<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="props.todo.done"
        @change="handleCheck(props.todo.id)" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(props.todo.id)">
      删除
    </button>
  </li>
</template>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
