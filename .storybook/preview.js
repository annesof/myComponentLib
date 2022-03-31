import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import theme1 from '../src/theme1';
import theme2 from '../src/theme2';
import '@storybook/addon-console';

//import { muiTheme } from "storybook-addon-material-ui";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f9f9f9',
      },
    ],
  },
  options: {
    storySort: {
      order: [
        'Getting started',
        [
          'Intro',
          'Installing the lib',
          'Design resources',
          'Recommended libraries',
          "What's new",
        ],
        'Components',
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme(theme2)}>
      <Story />
    </ThemeProvider>
  ),
];

//export const decorators = [muiTheme([theme1, theme2])];
