import { Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";
import { Story } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
};
