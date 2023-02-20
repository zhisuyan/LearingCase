<script setup>
import { computed } from 'vue';
const props = defineProps(['todos']);
const emit = defineEmits(['checkAllTodo', 'clearAllTodo']);
let total = computed(() => {
  return props.todos.length;
});

let doneTotal = computed(() => {
  return props.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
});

let isAll = computed({
  get() {
    return this.doneTotal === this.total && this.total > 0;
  },
  set(value) {
    emit('checkAllTodo', value);
  },
});

function clearAll() {
  emit('clearAllTodo');
}
</script>

<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
