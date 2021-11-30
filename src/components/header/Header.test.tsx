import {render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from './Header';

describe("header component", () => {

  it("should exists", async () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const dialog = screen.queryByTestId("container");
    expect(dialog).toBeDefined();

    const home = screen.findByText(/Home/i);
    expect(home).toBeDefined();

    const news = screen.findByText(/News/i);
    expect(news).toBeDefined();
  });
});

