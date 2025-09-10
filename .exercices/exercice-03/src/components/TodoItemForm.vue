<script setup lang="ts">
import { ref } from 'vue';

    const newTodoDescription = ref<string>('');

    const emits = defineEmits<{
        addTodo: [description: string]
    }>()

    const submitHandler = () => {
        // Est-ce que le champ de formulaire est correct ?
        if (!newTodoDescription.value.trim()) return;

        // On envoie à qui veut l'écouter la valeur de la description du todo (le champ input du formulaire)
        emits('addTodo', newTodoDescription.value);

        // On remet à la valeur par défaut notre champ de formulaire
        newTodoDescription.value = '';
    }
</script>

<template>
    <form @submit.prevent="submitHandler">
        <input type="text" placeholder="Description..." name="description" v-model="newTodoDescription">
        <button>Add</button>
    </form>
</template>

<style scoped>
form {
    width: 80%;
    display: grid;
    grid-template-columns: 8fr 2fr;
    background-color: red;
    overflow: hidden;
    border-radius: 1rem;
}

form input {
    width: 100%;
    background-color: rgb(42, 42, 42);
    padding: 0.5rem 1rem;
    color: white;

    &::placeholder {
        color: yellowgreen;
    }
}

form button {
    width: 100%;
    transition: all .5s;
    background-color: rgb(104, 141, 32);
    border: none;
    color: white;
    font-weight: bolder;

    &:hover {
        background-color: yellowgreen;
        cursor: pointer;
    }
}


</style>