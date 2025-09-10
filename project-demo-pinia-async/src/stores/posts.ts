import axios from "axios";
import { defineStore } from "pinia";
import { ref } from 'vue';

export interface Post {
  uderId: number;
  id: number;
  title: string;
  body: string;
}

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchPosts = async () => {
    isLoading.value = true;
    setTimeout(async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
        error.value = null;
      } catch (error: any) {
        error.value = error.message;
      } finally {
        isLoading.value = false;
      }
    }, 2000);

  }

  return { posts, isLoading, error, fetchPosts }
});