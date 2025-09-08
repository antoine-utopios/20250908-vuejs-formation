<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

const myReactiveVariable = ref<string>('');

const clickHandler = (text: string) => {
  console.log(text);
  
}

const changeVariableContent = (text: string) => {
  myReactiveVariable.value = text;
}

// const switchRoute = (newRoute: string) => {
//   myRoute.value = newRoute;
// }

// const myRoute = ref<string>('child')

</script>

<template>
  <ChildComponent prop-a="" @button-clicked="clickHandler"/>
  <ChildComponent prop-a="Toto" @button-clicked="changeVariableContent"/>
  <span>{{ myReactiveVariable }}</span>

  <!-- <button @click="switchRoute('about')">About</button>
  <button @click="switchRoute('child')">Child</button>

  <ChildComponent v-if="myRoute==='child'" />  
  <AboutComponent v-if="myRoute==='about'" />   -->
</template>

<style scoped></style>
