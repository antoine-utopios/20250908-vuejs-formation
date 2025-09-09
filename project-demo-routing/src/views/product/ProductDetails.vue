<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    const { productId } = route.params;
    const { mode, truc } = route.query;

    if (+productId === 1 || +productId === 2) console.log('C\'est gucci!');
    else router.push('/not-found');
    
    console.log('mode:', mode);
    console.log('truc:', truc);
    
    
</script>

<template>
    <h3>Product Details</h3>
    <div>
    </div>
</template>