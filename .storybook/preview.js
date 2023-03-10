import '../src/index.css';

// Registers the msw addon
import {initialize, mswDecorator} from "msw-storybook-addon";

// Init msw
initialize();

// Provide the msw addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
