import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Accordion } from './Accordion';
import coin from './assets/images/platforms-trade-with-the-best.png';
import computer from './assets/images/platforms-flexibility.png';

const meta = {
    title: 'Accordion',
    component: Accordion,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
  } satisfies Meta<typeof Accordion>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Base: Story = {
    args: {
        items: [
            {
            title: 'Trade with the best', 
            text: 'Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.', 
            image: `${coin}`
            },
            {
                title: 'Trade with the best', 
                text: 'Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.', 
                image: `${computer}`
            }],
        header: "Platforms",
        description: "Easily deployed across any organization of any scale. Unite teams, tools, and systems while maintaining flexibility in how teams prefer to work."
    }
  }