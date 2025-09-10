<script setup lang="ts">
import TodoItemDisplay from './components/TodoItemDisplay.vue';
import TodoItemForm from './components/TodoItemForm.vue';
import { useTodoItemsStore } from './stores/todos';
import { storeToRefs } from 'pinia';

const todoItemsStore = useTodoItemsStore();
const { todos } = storeToRefs(todoItemsStore);

const addTodoHandler = (todoDesc: string) => {

  // On créé un nouvel objet de type TodoItem (l'id est générée par le package uuid, en version 4)
  const newTodo = {
    description: todoDesc,
    isCompleted: false
  };

  // On ajoute au tableau de TodoItem le nouveau TodoItem que l'on vient de créer
  todoItemsStore.addTodo(newTodo);
}

const switchTodoStatusHandler = (todoId: string) => {
  // On envoie à notre store une action de modification du statut via l'une de ses actions
  todoItemsStore.switchTodoStatusById(todoId);
};

const deleteTodoHandler = (todoId: string) => {
  // On envoie à notre store une action de suppression d'un todo via l'une de ses actions
  todoItemsStore.deleteTodoById(todoId);
};

</script>

<template>
  <div class="app-container">
    <h1>TodoList</h1>
    <TodoItemForm @add-todo="addTodoHandler" />
    <div class="todo-container">
      <TodoItemDisplay v-for="(todoItem, index) in todos" :index="index" :key="index" :id="todoItem.id"
        @delete-todo="deleteTodoHandler" @switch-todo-status="switchTodoStatusHandler" />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  background-color: rgb(175, 175, 175);
  padding: 1rem 2rem;
  margin: 0 auto;
  border-radius: 1rem;
  width: 90%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  position: relative;
}

h1::after {
  content: '';
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  border-bottom: solid black 2px;
}

.todo-container {
  padding: 2rem 1rem .5rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  width: 80%;
}
</style>
