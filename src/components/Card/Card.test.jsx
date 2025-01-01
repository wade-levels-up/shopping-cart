import { describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  it("Renders Card Component", () => {
    render(<Card />);

    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
