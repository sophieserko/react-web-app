import React from "react";
import { render, screen } from "@testing-library/react";
import GameArea from "./GameArea";
import userEvent from "@testing-library/user-event";

describe("Press rock button", () => {
  it("should display rock as player's choice", () => {
    render(<GameArea />);

    const rockButton = screen.getByTestId("ROCKButton");

    expect(rockButton).toBeInTheDocument();
    // const rockButton = screen.getByTestId(/rockButton/i);
    // userEvent.click(rockButton);

    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
