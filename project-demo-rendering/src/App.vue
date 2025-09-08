<script setup lang="ts">
import { ref } from 'vue';

  const isVisible = ref<boolean>(false);
  const myAge = ref<number>(32);
  const myData = ref<number[]>([])

  let count = 0;

  const switchVisibility = () => {
    isVisible.value = !isVisible.value;
  }

  const addElementToArray = () => {
    myData.value.push(++count);
  }
</script>

<template>
  <button @click="switchVisibility">Click me!</button>
  <hr>
  <div v-show="isVisible">
    Je suis affiché dans le DOM en tout temps mais masqué via un <strong>display: none;</strong>
  </div>
  <div v-if="isVisible">
    Je suis un secret...
  </div>
  <div v-else>
    Je n'affiche pas le secret !
  </div>
  <hr>
  <input type="number" v-model="myAge">
  <div v-if="myAge>=21">Je suis majeur aux USA</div>
  <div v-else-if="myAge>=18">Je suis majeur en France</div>
  <div v-else>Areuh areuh...</div>
  <hr>
  <button @click="addElementToArray">Add element!</button>
  <ul>
    <li v-for="(number, index) in myData" :key="index">{{ number }}</li>
  </ul>
</template>

<style scoped></style>
