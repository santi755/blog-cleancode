import type { Meta, StoryObj } from '@storybook/vue3';

import Textfield from '@/blog/infrastructure/ui/vue3/atoms/textfield/Textfield.atom.vue';

const meta = {
    title: 'Blog/atoms/Textfield',
    component: Textfield,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Placeholder text...'
    }
};
