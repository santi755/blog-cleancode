<template>
    <v-chip :text="text" :variant="variant as any" />
</template>

<script lang="ts" setup>
type VariantType =
    | 'flat'
    | 'outlined'
    | 'plain'
    | 'text'
    | 'elevated'
    | 'tonal';

defineProps({
    text: {
        type: String,
        default: ''
    },
    variant: {
        type: String as () => VariantType,
        default: 'outlined' as VariantType
    }
});
</script>
