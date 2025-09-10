<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../../stores/counter';
import ProductDisplay from './components/ProductDisplay.vue';
import { useProductsStore } from '../../stores/products';

const productsStore = useProductsStore();
const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore)
const { products } = storeToRefs(productsStore);
const increment = counterStore.increment;


const addProductHandler = () => {
  productsStore.addProduct({
    name: 'Banana',
    description: 'Potassium',
    price: 1.29
  })
}

</script>

<template>
  <h1>Product List</h1>
  <hr>
  <button @click="increment">Increment</button>
  <button @click="addProductHandler">Add new product</button>
  <strong>Counter Value: </strong><span>{{ count }}</span>
  <hr>
  <ProductDisplay v-for="(product, index) in products" :product-id="product.id" :key="index" />
</template>