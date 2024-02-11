<template>
    <EditorContent :editor="editor" />
</template>

<script lang="ts" setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const editor = useEditor({
    content: '<p>Contenido</p>',
    extensions: [StarterKit]
});
</script>
