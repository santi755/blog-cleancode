<template>
    <v-avatar
        :image="image"
        :icon="icon"
        :text="text"
        :color="color"
    ></v-avatar>
</template>

<script lang="ts" setup>
defineProps({
    image: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    }
});
</script>
