import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './components/Card';



const meta = {
    title: 'Card',
    component: Card,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
  } satisfies Meta<typeof Card>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Classic: Story = {
    args : {
        title: "CLASSIC",
        price: 89,
        desc: "Entry level account with a recommended minimum deposit of"
    },
  }

  export const Pro: Story = {
    args : {
      title: "PRO",
      price: 139,
      desc: "Our Premium account with a minimum deposit of",
      withdrawls: true,
      type: 'pro'
    },
  }

  export const Elite: Story = {
    args : {
      title: "Elite",
      price: 339,
      desc: "Exclusive account type with a minimum deposit of",
      withdrawls: true,
      manage: true,
      type: 'elite'
    },
  }