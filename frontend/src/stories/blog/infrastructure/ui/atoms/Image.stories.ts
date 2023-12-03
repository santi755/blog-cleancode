import type { Meta, StoryObj } from '@storybook/vue3';

import Image from '@/blog/infrastructure/ui/vue3/atoms/image/Image.atom.vue';

const meta = {
    title: 'Blog/atoms/Image',
    component: Image,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: 'https://i.pravatar.cc/600',
        alt: 'Avatar alt',
        width: 200,
        height: 200
    }
};
