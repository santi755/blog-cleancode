<template>
    <v-textarea
        :disabled="disabled"
        :loading="loading"
        :placeholder="placeholder"
    />
</template>

<script lang="ts" setup>
defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
});
</script>
