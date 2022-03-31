import { Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";
import { Story } from "@storybook/react";
import CheckIcon from "@material-ui/icons/Check";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" }, endIcon: { control: false } },
  parameters: {
    componentSubtitle:
      "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action.",
    controls: {
      include: [
        "variant",
        "color",
        "children",
        "disabled",
        "endIcon",
        "onClick",
        "size",
      ],
    },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  variant: "contained",
  size: "small",
  color: "primary",
  endIcon: <CheckIcon />,
  children: "Save",
};

//export const Primary = Template.bind({});
export const Primary = (args: any) => (
  <>
    <Button {...args} variant='contained'>
      contained
    </Button>
    <Button {...args} variant='outlined'>
      outlined
    </Button>
  </>
);
Primary.args = {
  color: "primary",
  size: "small",
  endIcon: <CheckIcon />,
  children: "Cancel",
};

const variantDesc = `
By changing the \`variant\` prop you can use different styles of the button.

| variant   |  Description  |
|----------|-------------|
| \`contained\` | the principle call to action on the page |
| \`outlined\` | secondary actions on each page   |
`;

Primary.story = {
  name: "Button with Primary color",
  parameters: {
    layout: "centered",
    docs: {
      storyDescription: variantDesc,
    },
  },
};
