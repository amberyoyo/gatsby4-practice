import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/styles/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "responsive",
  },
  layout: "fullscreen",
};

export const decorators = [(Story) => <Story />];

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "zh-TW",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English (United States)" },
        { value: "zh-TW", right: "🇹🇼", title: "繁體中文" },
      ],
    },
  },
};
