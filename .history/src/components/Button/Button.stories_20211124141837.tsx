import { Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";
import { Story } from "@storybook/react";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    componentSubtitle: "test",
    controls: {
      include: [
        "variant",
        "color",
        "children",
        "disabled",
        "endIcon",
        "onClick",
      ],
    },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  color: "primary",
  endIcon: <CheckIcon />,
  children: "Save",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  color: "primary",
  endIcon: <CloseIcon />,
  children: "Cancel",
};
