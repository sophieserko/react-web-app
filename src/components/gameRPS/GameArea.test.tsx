import React from "react";
import { render, screen } from "@testing-library/react";
import GameArea from "./GameArea";
import userEvent from "@testing-library/user-event";

describe("The rock button", () => {
  it("should display in the GameArea", () => {
    render(<GameArea />);

    const rockButton = screen.getByTestId("ROCKButton");

    expect(rockButton).toBeInTheDocument();
  });

  it("should be clickable and display ROCK as player's choice", () => {
    render(<GameArea />);

    const rockButton = screen.getByTestId("ROCKButton");

    userEvent.click(rockButton);

    const playerDisplayElement = screen.getByText("Player = ROCK");
    expect(playerDisplayElement).toBeInTheDocument();
  });
});

describe("The scissors button", () => {
  it("should display in the GameArea", () => {
    render(<GameArea />);

    const rockButton = screen.getByTestId("SCISSORSButton");

    expect(rockButton).toBeInTheDocument();
  });

  it("should be clickable and display SCISSORS as player's choice", () => {
    render(<GameArea />);

    const rockButton = screen.getByTestId("SCISSORSButton");

    userEvent.click(rockButton);

    const playerDisplayElement = screen.getByText("Player = SCISSORS");
    expect(playerDisplayElement).toBeInTheDocument();
  });
});

describe("The paper button", () => {
  it("should display in the GameArea", () => {
    render(<GameArea />);

    const rockButton = screen.getByTestId("PAPERButton");

    expect(rockButton).toBeInTheDocument();
  });

  it("should be clickable and display PAPER as player's choice", () => {
    render(<GameArea />);

    const rockButton = screen.getByTestId("PAPERButton");

    userEvent.click(rockButton);

    const playerDisplayElement = screen.getByText("Player = PAPER");
    expect(playerDisplayElement).toBeInTheDocument();
  });
});

describe("Score increase", () => {
  it("for player when player wins a round", () => {
    render(<GameArea />);
    //const mockRobot = jest.fn().mo

    const rockButton = screen.getByTestId("PAPERButton");

    expect(rockButton).toBeInTheDocument();
  });

  it("for robot when robot wins a round", () => {});

  it("for tie when robot and player choices are equal", () => {});

  it("any outcome increases total game count", () => {});
});
