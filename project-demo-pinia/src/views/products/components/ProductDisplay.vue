<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductsStore } from '../../../stores/products';

const props = defineProps<{
  productId: string
}>()

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);

const product = products.value.find(x => x.id === props.productId);
</script>

<template>
  <div v-if="product">
    {{ product.name }}

  </div>
</template>