<template>
    <v-text-field
        class="textfield"
        :prepend-icon="prependIcon"
        :prepend-inner-icon="prependInnerIcon"
        :append-icon="appendIcon"
        :append-inner-icon="appendInnerIcon"
        :disabled="disabled"
        :loading="loading"
        :placeholder="placeholder"
        :clearable="clearable"
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
    },
    clearable: {
        type: Boolean,
        default: false
    },
    prependIcon: {
        type: String,
        default: ''
    },
    prependInnerIcon: {
        type: String,
        default: ''
    },
    appendIcon: {
        type: String,
        default: ''
    },
    appendInnerIcon: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
:deep(.textfield) {
}

.textfield {
    :deep(.v-field) {
        @extend .body-bold;
        @extend .border-radius-none;
        @extend .bordered;
    }
}
</style>
