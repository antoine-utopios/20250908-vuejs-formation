import { defineStore } from "pinia";
import type { TodoItem } from "../models/todo-item.model";
import { ref } from "vue";
import { v4 as uuid } from 'uuid'

export const useTodoItemsStore = defineStore('todos', () => {
  const todos = ref<TodoItem[]>([])

  const addTodo = (newTodoItem: Omit<TodoItem, 'id'>) => {
    todos.value.push({
      id: uuid(),
      ...newTodoItem
    });
  }

  const switchTodoStatusById = (todoId: string) => {
    const todoFound = todos.value.find(x => x.id === todoId)
    if (todoFound) todoFound.isCompleted = !todoFound.isCompleted;
  }

  const deleteTodoById = (todoId: string) => {
    todos.value = todos.value.filter(x => x.id !== todoId);
  }

  return { todos, addTodo, switchTodoStatusById, deleteTodoById }
});