import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./components/App";

test("renders a search bar", () => {
  render(<App />);
  const searchInput = screen.getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
});
