import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import CustomCard, { CustomCardProps } from "./CustomCard";
import { Story } from "@storybook/react";

export default {
  title: "Components/CustomCard",
  component: CustomCard,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CustomCardProps> = (args) => <CustomCard {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  title: "Title 😃",
  summary: "large",
  tag: "rdfg",
  targetlabel: "dsfdf",
};
