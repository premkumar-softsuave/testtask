import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import {MemoizedSearch} from './Search';

describe("Search component", () => {

  it("should exists", async () => {
    const searchSomething = () => { }
    render(<BrowserRouter><MemoizedSearch searchSomething={searchSomething} /></BrowserRouter>);
    const dialog = screen.queryByTestId("container");
    expect(dialog).toBeDefined();

    const form = screen.queryByTestId("submit-form");
    expect(form).toBeDefined();
  });
  it("text field", async () => {
    const searchSomething = () => { }
    render(<BrowserRouter><MemoizedSearch searchSomething={searchSomething} /></BrowserRouter>);

    const input = screen.getByPlaceholderText(/Search.../i);
    expect(input).toBeDefined();

    userEvent.type(input, "testing");
    expect(input.value).toBe("testing");
  });

});

