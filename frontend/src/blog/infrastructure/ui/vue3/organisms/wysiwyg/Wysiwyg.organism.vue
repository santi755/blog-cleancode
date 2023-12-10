<template>
    <div>
        <EditorContent :editor="editor" />
    </div>
</template>

<script lang="ts" setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const editor = useEditor({
    content: '<p>Hello World! 🌎️</p>',
    extensions: [StarterKit]
});
</script>
