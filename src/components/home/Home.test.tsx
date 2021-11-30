import {render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from './Home';

describe("Home component", () => {

  it("should exists", async () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const dialog = screen.queryByTestId("test-container");
    expect(dialog).toBeDefined();
  });
});

