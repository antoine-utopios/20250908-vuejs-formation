<script setup lang="ts">
import TodoItemDisplay from './components/TodoItemDisplay.vue';
import TodoItemForm from './components/TodoItemForm.vue';
import { v4 as uuid } from 'uuid';
import type { TodoItem } from './models/todo-item.model';
import { ref } from 'vue';

const todos = ref<TodoItem[]>([]);

const addTodoHandler = (todoDesc: string) => {
  
  // On créé un nouvel objet de type TodoItem (l'id est générée par le package uuid, en version 4)
  const newTodo:TodoItem = {
    id: uuid(),
    description: todoDesc,
    isCompleted: false
  };

  // On ajoute au tableau de TodoItem le nouveau TodoItem que l'on vient de créer
  todos.value.push(newTodo);
}

const switchTodoStatusHandler = (todoId: string) => {
  // On chercher le todo dont on veut modifier son statut
  const todoFound = todos.value.find(x => x.id === todoId);

  // Si on en trouve pas, on se stoppe là
  if (!todoFound) return;

  // Sinon on va inverser sa valeur booléenne
  todoFound.isCompleted = !todoFound.isCompleted;
};

const deleteTodoHandler = (todoId: string) => {
  // On va modifier la valeur du tableau via un nouveau tableau excluant le todo que l'on chercher à supprimer (via un filtre par id)
  todos.value = todos.value.filter(x => x.id != todoId);
};

</script>

<template>
  <div class="app-container">
    <h1>TodoList</h1>
    <TodoItemForm @add-todo="addTodoHandler" />
    <div class="todo-container">
      <TodoItemDisplay v-for="(todoItem, index) in todos" v-bind="{...todoItem, index, key: todoItem.id}" @delete-todo="deleteTodoHandler" @switch-todo-status="switchTodoStatusHandler" />
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
