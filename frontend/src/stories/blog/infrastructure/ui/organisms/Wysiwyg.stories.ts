import type { Meta, StoryObj } from '@storybook/vue3';

import Wysiwyg from '@/blog/infrastructure/ui/vue3/organisms/wysiwyg/Wysiwyg.organism.vue';

const meta = {
    title: 'Blog/organisms/Wysiwyg',
    component: Wysiwyg,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Wysiwyg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {}
};
