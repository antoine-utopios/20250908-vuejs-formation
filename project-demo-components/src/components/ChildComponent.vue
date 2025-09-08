<script setup lang="ts">

    const props = defineProps({
        propA: {
            type: String,
            required: true
        },
        propB: {
            type: String,
            default: 'Hello World!',
            required: false
        },
    })

    const emits = defineEmits<{
        buttonClicked: [text: string]
        otherEvent: [_: void]
    }>()
</script>

<template>
    <h2>ChildComponent</h2>
    <div v-if="props.propA">{{ props.propA }}</div>
    <div>{{ props.propB }}</div>
    <button @click="emits('buttonClicked', 'Hello world!')">Click me!</button>
</template>

<style scoped></style>