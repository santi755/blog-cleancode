import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '@/blog/infrastructure/ui/vue3/atoms/button/Button.atom.vue';

const meta = {
    title: 'Blog/atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'Primary'
    }
};
