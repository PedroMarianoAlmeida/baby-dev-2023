import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonTest from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: ButtonTest,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ButtonTest>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonTest> = (args) => <ButtonTest />;

export const Primary = Template.bind({});
