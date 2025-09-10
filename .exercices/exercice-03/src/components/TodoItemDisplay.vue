<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoItemsStore } from '../stores/todos';

const props = defineProps<{
    id: string;
    index: number;
}>()

const emits = defineEmits<{
    switchTodoStatus: [todoId: string]
    deleteTodo: [todoId: string]
}>()

const todoItemStore = useTodoItemsStore()
const todoFound = storeToRefs(todoItemStore).todos.value.find(x => x.id === props.id);

</script>

<template>
    <div v-if="todoFound">
        <div :class="['todo-item', { 'done': todoFound.isCompleted }]">
            <span id="index">{{ index }}</span>
            <span id="description">{{ todoFound.description }}</span>
            <div>
                <button id="switch-status-btn" @click="emits('switchTodoStatus', props.id)">{{ todoFound.isCompleted ?
                    '🟩' : '🟥'
                }}</button>
                <button id="delete-btn" @click="emits('deleteTodo', props.id)">🗑️</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.todo-item {
    width: 100%;
    padding: .25rem 1rem;
    box-sizing: border-box;
    border-radius: .5rem;
    display: flex;
    justify-content: space-between;
    background-color: rgb(141, 51, 41);
    transition: .5s all;
}

.todo-item.done {
    background-color: rgb(41, 141, 69);
}


.todo-item button {
    border: none;
    background-color: transparent;

}
</style>