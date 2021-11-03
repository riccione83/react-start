import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Older articles text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Older articles/i);
  expect(linkElement).toBeInTheDocument();
});
