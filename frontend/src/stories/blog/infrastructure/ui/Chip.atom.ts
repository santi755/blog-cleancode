import type { Meta, StoryObj } from '@storybook/vue3';

import Chip from '@/blog/infrastructure/ui/vue3/atoms/chip/Chip.atom.vue';

const meta = {
    title: 'Blog/atoms/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'Chip text',
        variant: 'outlined'
    }
};
