<script setup lang="ts">
import { productStoreKey } from '@/keys';
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const { getProductById, deleteProductById } = inject(productStoreKey)!;

    const route = useRoute();
    const router = useRouter();

    const productId = route.params.productId as string;

    const productFound = getProductById(productId) 

    const deleteHandler = () => {
        if (deleteProductById(productId)) router.push("/products");
        else {
            alert("Un soucis lors de la suppression !");
        }
    }
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
        <div>
            <button @click="deleteHandler">Confirm Deletion</button>
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