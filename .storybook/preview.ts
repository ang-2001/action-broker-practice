import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/index.css';


const customViewport = {
  ipad: {
    name: 'ipad pro 11',
    styles: {
      width: '834px',
      height: '965px'
    },
  },
  mobile: {
    name: 'mobile 375',
    styles: {
      width: '375px',
      height: '760px'
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1440px',
      height: '1120px'
    },
  },
}



const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewport,
      },
      options: INITIAL_VIEWPORTS,
    }
  },
};

export default preview;
