<script setup lang="ts">
const props = defineProps<{
  productId: number
}>()

const emits = defineEmits<{
  deleteProduct: [productId: number]
}>()
</script>

<template>
  <h3>Props and Emits Component</h3>
  <div data-test="product-display">
    <strong>Id: </strong>{{ productId }}
  </div>
  <div>
    <button data-test="product-delete-btn" @click="() => emits('deleteProduct', productId)">Delete</button>
  </div>

</template>

<style scoped></style>
