<script setup lang="ts">
    const props = defineProps<{
        id: string;
        index: number;
        description: string;
        isCompleted: boolean;
    }>()

    const emits = defineEmits<{
        switchTodoStatus: [todoId: string]
        deleteTodo: [todoId: string]
    }>()
</script>

<template>
    <div :class="['todo-item', { 'done': isCompleted }]">
        <span id="index">{{ index }}</span>
        <span id="description">{{ description }}</span>
        <div>
            <button id="switch-status-btn" @click="emits('switchTodoStatus', props.id)">{{ isCompleted ? '🟩' : '🟥' }}</button>
            <button id="delete-btn" @click="emits('deleteTodo', props.id)">🗑️</button>
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