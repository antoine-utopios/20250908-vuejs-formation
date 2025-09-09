<script setup lang="ts">
import { productStoreKey } from '@/keys';
import { inject } from 'vue';
import { useRoute } from 'vue-router';

    const { getProductById } = inject(productStoreKey)!;

    const route = useRoute();

    const productId = route.params.productId as string;

    const productFound = getProductById(productId) 
</script>

<template>
    <div v-if="productFound">
        <h1>{{ productFound.name }}</h1>
        <hr>
        <img class="img-thumbnail" :src="productFound.pictureUrl" :alt="productFound.name">
        <div>
            <strong>ID: </strong><span>{{ productFound.id }}</span>
        </div>
        <div>
            <strong>Description: </strong><span>{{ productFound.description }}</span>
        </div>
        <div>
            <strong>Price: </strong><span>{{ productFound.price.toFixed(2) }} €</span>
        </div>
    </div>
</template>

<style scoped>
    .img-thumbnail {
        height: 250px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
</style>