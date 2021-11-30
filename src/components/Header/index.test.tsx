import {render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from '.';

describe("header component", () => {
  it("should exists", async () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const dialog =  screen.queryByTestId("header-component");
    expect(dialog).toBeDefined();

    const home = screen.findByText(/Home/i);
    expect(await home).toBeDefined();

    const news = screen.findByText(/News/i);
    expect(await news).toBeDefined();
  });
});

