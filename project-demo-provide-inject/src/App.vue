<script setup lang="ts">
import ParentComponent from './components/ParentComponent.vue';
import { myTextKey } from '@/keys';
import { inject, ref } from 'vue';

    const myText = inject(myTextKey, ref('Toto'))

</script>

<template>
    <h3>App</h3>
    <hr>
    <div>
        <strong>myText (App): </strong> <span>{{ myText }}</span>
    </div>

    <hr>

    <ParentComponent :my-text="myText" @change-my-text="(event) => myText = event"/>
</template>

<style scoped></style>
