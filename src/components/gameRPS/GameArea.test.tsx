import React from "react";
import { render, screen } from "@testing-library/react";
import GameArea from "./GameArea";
import userEvent from "@testing-library/user-event";
import * as utils from "./getRobotChoice";

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

    const scissorButton = screen.getByTestId("SCISSORSButton");

    expect(scissorButton).toBeInTheDocument();
  });

  it("should be clickable and display SCISSORS as player's choice", () => {
    render(<GameArea />);

    const scissorButton = screen.getByTestId("SCISSORSButton");

    userEvent.click(scissorButton);

    const playerDisplayElement = screen.getByText("Player = SCISSORS");
    expect(playerDisplayElement).toBeInTheDocument();
  });
});

describe("The paper button", () => {
  it("should display in the GameArea", () => {
    render(<GameArea />);

    const paperButton = screen.getByTestId("PAPERButton");

    expect(paperButton).toBeInTheDocument();
  });

  it("should be clickable and display PAPER as player's choice", () => {
    render(<GameArea />);

    const paperButton = screen.getByTestId("PAPERButton");

    userEvent.click(paperButton);

    const playerDisplayElement = screen.getByText("Player = PAPER");
    expect(playerDisplayElement).toBeInTheDocument();
  });
});

describe("Score increase", () => {
  it.only("for player when player wins a round", () => {
    // jest.mock("./getRobotChoice", () => {
    //   return { getRobotChoice2: () => "ROCK" };
    // });
    jest.spyOn(utils, "getRobotChoice2").mockReturnValue("ROCK");
    render(<GameArea />);

    const paperButton = screen.getByTestId("PAPERButton");

    userEvent.click(paperButton);

    expect(
      screen.getByText(/Result: paper wraps rock you win!!/i)
    ).toBeInTheDocument();
  });

  it("for robot when robot wins a round", () => {});

  it("for tie when robot and player choices are equal", () => {});

  it("any outcome increases total game count", () => {});
});
