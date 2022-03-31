import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

const { ContainedPrimary } = composeStories(stories);

describe("<Button />", () => {
  test("rendered text", () => {
    render(<ContainedPrimary />);
    expect(screen.getByText("Save")).toBeDefined();
  });
});
