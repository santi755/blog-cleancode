<template>
    <v-btn>{{ props.label }}</v-btn>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    }
});
</script>
