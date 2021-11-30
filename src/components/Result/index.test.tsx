import {render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Result from '.';

describe("Result component", () => {

  it("should exists", async () => {
    render(<BrowserRouter><Result  result={[]} image={[]} index={0} type={"testing"} /></BrowserRouter>);
    const dialog = screen.queryByTestId("container");
    expect(dialog).toBeDefined();
  });
});

