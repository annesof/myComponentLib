import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("<Button />", () => {
  test("rendered text", () => {
    render(<Button>Save</Button>);
    expect(screen.getByText("Save")).toBeDefined();
  });
});
