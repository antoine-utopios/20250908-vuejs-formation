<script setup lang="ts">
import { myTextKey } from '@/keys';
import { inject } from 'vue';

    const myText = inject(myTextKey)

    const updateText = (event: Event) => {
        if (myText) myText.value = (event.target as HTMLInputElement).value;
    }
</script>

<template>
    <h3>OtherChildComponent</h3>
    <hr>
    <div v-if="myText">
        <strong>myText (OtherChildComponent): </strong> <span>{{ myText }}</span>
        <input type="text" :value="myText" @input="(event) => updateText(event)">
    </div>
</template>

<style scoped>

</style>