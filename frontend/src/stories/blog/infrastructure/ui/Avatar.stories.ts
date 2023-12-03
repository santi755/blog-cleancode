import type { Meta, StoryObj } from '@storybook/vue3';

import Avatar from '@/blog/infrastructure/ui/vue3/atoms/avatar/Avatar.atom.vue';

const meta = {
    title: 'Blog/atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'S',
        color: 'primary',
        image: 'https://i.pravatar.cc/300'
    }
};
