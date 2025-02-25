import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './components/Header';

const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    onAccordionToggle: () => {}
  }
};


