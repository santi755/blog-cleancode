<template>
    <div>
        <ButtonAtom text="Login" appearance="outlined" />
        <WysiwygOrganism />
    </div>
</template>

<script lang="ts" setup>
import ButtonAtom from '@/blog/infrastructure/ui/vue3/atoms/button/Button.atom.vue';
import WysiwygOrganism from '@/blog/infrastructure/ui/vue3/organisms/wysiwyg/Wysiwyg.organism.vue';
</script>
