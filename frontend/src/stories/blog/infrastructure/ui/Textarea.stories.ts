import type { Meta, StoryObj } from '@storybook/vue3';

import Textarea from '@/blog/infrastructure/ui/vue3/atoms/textarea/Textarea.atom.vue';

const meta = {
    title: 'Blog/atoms/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Placeholder text...'
    }
};
