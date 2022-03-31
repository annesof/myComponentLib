import { Meta } from "@storybook/react/types-6-0";
import { Checkbox } from "./Checkbox";
import { CheckboxProps, FormControlLabel } from "@material-ui/core";

import { Story } from "@storybook/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    componentSubtitle:
      "Checkboxes are used for a list of options where the user may select multiple options, including all or none.",
    controls: {
      exclude: [
        "ref",
        "edge",
        "disableFocusRipple",
        "centerRipple",
        "focusVisibleClassName",
        "onFocusVisible",
        "disableTouchRipple",
        "focusRipple",
        "TouchRippleProps",
        "action",
      ],
    },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

// Reuse that template for creating different stories
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
  indeterminate: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  checked: true,
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
  disabled: false,
};

const TemplateLabel: Story<CheckboxProps> = (args) => (
  <FormControlLabel
    value='value'
    control={<Checkbox {...args} />}
    label='label 1'
    labelPlacement='end'
  />
);

export const WithLabel = TemplateLabel.bind({});
WithLabel.args = {
  indeterminate: false,
  disabled: false,
  checked: true,
};
