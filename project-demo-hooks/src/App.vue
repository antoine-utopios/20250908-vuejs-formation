<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

  const isVisible = ref(false);
</script>

<template>
  <button @click="() => isVisible = !isVisible">Toggle visibility</button>
  <hr>
  <!-- <ChildComponent v-show="isVisible"/> -->
  <ChildComponent v-if="isVisible"/>
</template>

<style scoped></style>
