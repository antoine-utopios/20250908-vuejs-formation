<script setup lang="ts">
    const props = defineProps<{
        myText: string
    }>()

    const emits = defineEmits<{
        changeMyText: [text: string]
    }>()

    const updateText = (event: Event) => {
        emits('changeMyText', (event.target as HTMLInputElement).value)
    }
</script>

<template>
    <h3>ChildComponent</h3>
    <hr>
    <div>
        <strong>myText (ChildComponent): </strong> <span>{{ props.myText }}</span>
        <input type="text" :value="props.myText" @input="(event) => updateText(event)">
    </div>
</template>

<style scoped>

</style>