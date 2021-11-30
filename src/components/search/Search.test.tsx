import {render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from './Search';

describe("Search component", () => {

  it("should exists", async () => {
    const searchSomething = () => { }
    render(<BrowserRouter><Search searchSomething={searchSomething} /></BrowserRouter>);
    const dialog = screen.queryByTestId("container");
    expect(dialog).toBeDefined();
  });
});

