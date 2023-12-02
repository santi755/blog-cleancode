<template>
    <Button :label="label"> </Button>
</template>

<script lang="ts" setup>
import Button from '@/blog/infrastructure/ui/vue3/atoms/button/Button.atom.vue';

withDefaults(
    defineProps<{
        /**
         * The label of the button
         */
        label: string;
        /**
         * primary or secondary button
         */
        primary?: boolean;
        /**
         * size of the button
         */
        size?: 'small' | 'medium' | 'large';
        /**
         * background color of the button
         */
        backgroundColor?: string;
    }>(),
    { primary: false }
);
</script>
