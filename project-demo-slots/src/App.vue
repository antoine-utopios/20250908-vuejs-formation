<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import Card from './components/Card.vue';

  const monTexte = ref<string>('');
  const newPeople = reactive({
    firstname: '',
    lastname: ''
  });

  watch(monTexte, (txt: string) => {
    console.log(txt);
    
  });

  watch(() => newPeople.firstname, (newFirstname) => {
    console.log(newFirstname);
    
  });

  const clickHandler = () => {
    console.log("J'ai été cliqué!");
  }
</script>

<template>
  <input type="text" v-model="monTexte">
  <hr>
  <div>
    <label for="firstname">Firstname: </label>
    <input type="text" id="firstname" v-model="newPeople.firstname">
  </div>
  <div>
    <label for="lastname">Lastname: </label>
    <input type="text" id="lastname" v-model="newPeople.lastname">
  </div>
  <hr>
  <Card>
    <template v-slot:header>
      <h2>{{ newPeople.firstname }}</h2>
    </template>
    <template v-slot:default>
      <img src="https://i.redd.it/the-damascus-goat-theyre-beautiful-as-youngsters-then-as-v0-9914rtwgz5oc1.jpg?width=600&format=pjpg&auto=webp&s=4957e251ef83cd223369a83b62130d0f14f7e467" alt="Damascus Goat">
    </template>
    <template v-slot:footer>
      <button @click="clickHandler">Click me!</button>
    </template>
  </Card>
</template>

<style scoped></style>
