import { ComponentStory } from "@storybook/react";
import React from "react";
import IndexPage from "../pages";

export default {
  title: "Example",
  component: IndexPage,
};

const Template: ComponentStory<typeof IndexPage> = (args) => (
  <IndexPage {...args} />
);

export const Demo = Template.bind({});
