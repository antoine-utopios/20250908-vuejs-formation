<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePostsStore } from './stores/posts';

const postsStore = usePostsStore()
const { posts, isLoading, error } = storeToRefs(postsStore);

</script>



<template>
  <h1>Post Listing</h1>
  <button @click="postsStore.fetchPosts">Fetch all posts!</button>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div v-for="p in posts">
      {{ p.title }}
    </div>
  </div>
</template>

<style scoped></style>
