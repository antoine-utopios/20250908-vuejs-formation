<script setup lang="ts">
import { useRoute } from 'vue-router';

    const route = useRoute()

    const { pathMatch } = route.params;

    console.log(pathMatch);
    
</script>

<template>
    <h1>NotFound</h1>
</template>