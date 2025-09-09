<script setup lang="ts">
import { ref } from 'vue';
import { useCounter } from './composables/useCounter.composable';

const { counter, increment, decrement } = useCounter();

  const isVisible = ref(false);

</script>

<template>
  <span>{{ counter }}</span>
  <button @click="decrement"><<</button>
  <button @click="increment">>></button>

  <hr>
  <button @click="() => isVisible = !isVisible">Toggle</button>
  
  <Transition name="opacity">
    <div v-if="isVisible" class="red-box"></div>
  </Transition>
  
  <hr>
  
  <TransitionGroup name="opacity" tag="div" class="">
    <div v-for="i in counter" :key="i" class="red-box small-box"></div>
  </TransitionGroup>

  <Teleport to="#app-modal">
    <div v-if="isVisible">
      Je suis un modal
    </div>
  </Teleport>

</template>

<style scoped>
  .red-box {
    height: 250px;
    aspect-ratio: 1 / 1;
    background-color: red;
  }

  .small-box {
    height: 100px;
    margin-block: 25px;
  }

  .opacity-enter-active,
  .opacity-leave-active {
    transition: all .5s;
  }

  .opacity-enter-from,
  .opacity-leave-to {
    opacity: 0;
  }
</style>
