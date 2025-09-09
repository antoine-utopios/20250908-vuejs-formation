<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
import OtherChildComponent from './OtherChildComponent.vue';

    const props = defineProps<{
        myText: string
    }>()

    const emits = defineEmits<{
      changeMyText: [text: string]
  }>()
</script>

<template>
    <h3>ParentComponent</h3>
    <hr>
    <div>
        <strong>myText (ParentComponent): </strong> <span>{{ props.myText }}</span>
    </div>

    <ChildComponent :my-text="props.myText" @change-my-text="emits('changeMyText', $event)" />
    <OtherChildComponent />
</template>

<style scoped>

</style>