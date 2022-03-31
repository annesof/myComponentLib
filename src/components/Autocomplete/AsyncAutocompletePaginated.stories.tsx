import { Meta } from '@storybook/react/types-6-0';
import {
  AsyncAutocompletePaginated,
  AsyncAutocompleteProps,
} from './AsyncAutocompletePaginated';
import { Grid } from '@material-ui/core';

export default {
  title: 'Components/Autocomplete',
  component: AsyncAutocompletePaginated,
  parameters: {
    componentSubtitle:
      'The autocomplete is a normal text input enhanced by a panel of suggested options (with asynchron search)',
    controls: {
      exclude: ['ref'],
    },
  },
  argTypes: {
    fetchSize: {
      description: 'Number of elements fetch by page',
      table: {
        type: {
          required: true,
        },
      },
    },
    disableClearable: {
      description: "If true, the input can't be cleared.",
    },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template = (args) => (
  <div style={{ width: 500 }}>
    <AsyncAutocompletePaginated {...args} />
  </div>
);
const dataSimple = [
  { label: 'The Matrix', value: 5 },
  { label: 'Star wars', value: 7 },
  { label: 'Inception', value: 4 },
];

// Reuse that template for creating different stories
export const AsyncautocompleteSimple = Template.bind({});
AsyncautocompleteSimple.args = {
  loadOptions: (name: string, offset: number, size: number) => {
    const items = dataSimple.filter((item) => item.label.includes(name));
    const data = {
      items: items,
      count: 3,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    return new Response(blob, { status: 200, statusText: 'ok!' });
  },
  label: 'Movies',
  disableClearable: true,
};

const dataPaginated1 = [
  { label: 'Matrix', value: 5 },
  { label: 'Star wars', value: 7 },
  { label: 'Indiana Jones', value: 2 },
  { label: 'Fight Club', value: 1 },
  { label: 'Forrest Gump', value: 6 },
  { label: 'Back to the Future', value: 4 },
  { label: '12 angry men', value: 3 },
  { label: 'The Silence of the Lambs', value: 10 },
  { label: 'Seven', value: 8 },
  { label: 'The Name of the Rose', value: 9 },
];
const dataPaginated2 = [{ label: 'Inception', value: 11 }];

export const AsyncautocompletePaginated = Template.bind({});
AsyncautocompletePaginated.args = {
  loadOptions: (name: string, offset: number, size: number) => {
    const items = offset === 0 ? dataPaginated1 : dataPaginated2;
    const data = {
      items: items,
      count: items.length,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    return new Response(blob, { status: 200, statusText: 'ok' });
  },
  label: 'Movies',
  disableClearable: true,
  fetchSize: 10,
};

const dataCustom = [
  { label: 'The Matrix', value: 5, type: 'Science Fiction' },
  { label: 'Star wars', value: 3, type: 'Science Fiction' },
  { label: 'Indiana Jones', value: 4, type: 'Adventure' },
];

// Reuse that template for creating different stories
export const RenderCustomOptions = Template.bind({});
RenderCustomOptions.args = {
  loadOptions: (name: string, offset: number, size: number) => {
    const items = dataCustom.filter((item) => item.label.includes(name));
    const data = {
      items: items,
      count: 3,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    return new Response(blob, { status: 200, statusText: 'ok!' });
  },
  label: 'Movies',
  disableClearable: true,
  renderOptionCustom: (movie: { label: string; type: string }) => (
    <Grid container alignItems="center">
      <Grid item xs>
        {movie.label} -&nbsp;
        <small>
          <em>{movie.type}</em>
        </small>
      </Grid>
    </Grid>
  ),
};
