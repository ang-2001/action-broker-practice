import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import facebook from './assets/logos-and-icons/facebook.svg';
import linkedin from './assets/logos-and-icons/linkedin.svg';
import twitter from './assets/logos-and-icons/facebook.svg';

import { SocialButton } from './components/ButtonSocial';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Social Button',
  component: SocialButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    image: facebook,
  },
};

export const Secondary: Story = {
  args: {
    image: linkedin,
  },
};

export const SecondaryDark: Story = {
  args: {
    image: twitter,
    dark: true,
  },
};
