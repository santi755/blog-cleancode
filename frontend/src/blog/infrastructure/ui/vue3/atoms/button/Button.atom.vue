<template>
    <v-btn
        class="button"
        :class="buttonStyle?.class"
        :active="active"
        :disabled="disabled"
        :loading="loading"
        :prepend-icon="prependIcon"
        :append-icon="appendIcon"
        :text="text"
        :variant="buttonStyle?.variant"
    />
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    active: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    appendIcon: {
        type: String,
        default: null
    },
    prependIcon: {
        type: String,
        default: null
    },
    appearance: {
        type: String as PropType<'solid' | 'outlined' | 'disabled'>,
        default: null,
        required: true
    }
});

const buttonStyle = computed(() => {
    const appearanceOptions: Record<
        string,
        {
            variant: 'outlined' | 'flat';
            class: 'button-appearance-solid' | 'button-appearance-outlined';
        }
    > = {
        solid: {
            variant: 'flat',
            class: 'button-appearance-solid'
        },
        outlined: {
            variant: 'outlined',
            class: 'button-appearance-outlined'
        }
    };

    return appearanceOptions[props.appearance];
});
</script>

<style scoped lang="scss">
:deep(.button) {
}

.button {
    @extend .body-bold;
    @extend .border-radius-none;
    @extend .bordered;
}

.button-appearance-solid {
    @extend .bg-stock-color-black;
    @extend .text-grey-scale-5;
}

.button-appearance-outlined {
    @extend .bg-white;
    @extend .text-grey-scale-1;
}
</style>
