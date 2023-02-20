<script setup>
import { ref } from 'vue';
import { nanoid } from 'nanoid';

const emit = defineEmits(['addTodo']);

const title = ref('');

function add() {
  //校验数据
  if (!title.value.trim()) return alert('输入不能为空');
  //将用户的输入包装成一个todo对象
  const todoObj = { id: nanoid(), title: title.value, done: false };
  //通知App组件去添加一个todo对象
  emit('addTodo', todoObj);
  //清空输入
  title.value = '';
}
</script>

<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add" />
  </div>
</template>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
