<script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref, onUpdated, useTemplateRef } from 'vue';

    const maVariable = ref<string>('');
    const monInputRef = useTemplateRef('inputBasic')

  onMounted(() => {
    console.log('Le composant ChildComponent est apparu !');
    monInputRef.value?.focus();
  })

  onBeforeUnmount(() => {
    console.log('Le composant ChildComponent s\'en va...');
    
})

onUpdated(() => {
    console.log('Le composant ChildComponent s\'update!');
    
  })
</script>

<template>
    <div class="component">
        <div>ChildComponent!</div>
        <input type="text" v-model="maVariable" ref="inputBasic">
    </div>
</template>

<style scoped>
</style>