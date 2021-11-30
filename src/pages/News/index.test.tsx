import {render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import News from '.';

describe("News component", () => {

  it("should exists", async () => {
    render(<BrowserRouter><News /></BrowserRouter>);
    const dialog = screen.queryByTestId("container");
    expect(dialog).toBeDefined();
  });
});

