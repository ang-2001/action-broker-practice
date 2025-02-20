import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Footer',
  component: Footer,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};