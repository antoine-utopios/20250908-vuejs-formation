<script setup lang="ts">
import { productStoreKey } from '@/keys';
import { inject } from 'vue';

    const { products } = inject(productStoreKey)!;
</script>

<template>
    <h1>Product List</h1>
    <RouterLink to="/products/bis?mode=add">Add new Product</RouterLink>
    <div v-for="(product, index) in products" :key="index">
        <strong>{{ product.name }}</strong>
        <RouterLink :to="`/products/bis/${product.id}?mode=view`">Details</RouterLink>
        <RouterLink :to="`/products/bis/${product.id}?mode=delete`">Delete</RouterLink>
        <RouterLink :to="`/products/bis/${product.id}?mode=edit`">Edit</RouterLink>
    </div>
    <!-- <RouterLink to="/products/create">Add new Product</RouterLink>
    <div v-for="(product, index) in products" :key="index">
        <strong>{{ product.name }}</strong>
        <RouterLink :to="`/products/details/${product.id}`">Details</RouterLink>
        <RouterLink :to="`/products/delete/${product.id}`">Delete</RouterLink>
        <RouterLink :to="`/products/edit/${product.id}`">Edit</RouterLink>
    </div> -->
</template>