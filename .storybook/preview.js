import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import theme1 from "../src/theme1";
import theme2 from "../src/theme2";

import { muiTheme } from "storybook-addon-material-ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/*export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme(theme1)}>
      <Story />
    </ThemeProvider>
  ),
];*/

export const decorators = [muiTheme([theme1, theme2])];
