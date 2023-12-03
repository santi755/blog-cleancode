<template>
    <v-img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script lang="ts" setup>
defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: Number,
        default: 100
    },
    height: {
        type: Number,
        default: 100
    }
});
</script>
