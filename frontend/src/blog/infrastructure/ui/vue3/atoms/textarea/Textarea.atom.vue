<template>
    <v-textarea
        class="textarea"
        :disabled="disabled"
        :loading="loading"
        :placeholder="placeholder"
        variant="outlined"
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

<style lang="scss" scoped>
:deep(.textarea) {
}

.textarea {
    :deep(.v-field) {
        @extend .body-bold;
        @extend .border-radius-none;
        @extend .bordered;

        textarea {
            resize: none;
        }
    }
}
</style>
