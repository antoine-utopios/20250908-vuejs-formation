<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);
</script>

<template>
  <h3>Reactive Component</h3>
  <img data-test="thumbnail-img"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1020px-Banana-Single.jpg?20150318233437"
    alt="Banana">
  <hr>
  <button data-test="visibility-btn" @click="() => isVisible = !isVisible">Click me!</button>
  <div v-if="isVisible" data-test="secret-div">Je suis le secret</div>
  <div v-else data-test="mask-div">Je masque le secret</div>

</template>

<style scoped></style>
