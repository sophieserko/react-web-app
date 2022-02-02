import { Choice, Result } from "./choice";
import AdbIcon from "@material-ui/icons/Adb";
import { Person } from "@material-ui/icons";

// export function printOutGameState(choice: string, result: Result): string {

//   return "";
// }

import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

interface Props {
  robot: string;
  player: string;
  playerName: string;
  gameResult: string;
}

export const GameStateOutput = ({
  robot,
  player,
  playerName,
  gameResult,
}: Props) => {
  return (
    <Container>
      <Grid container direction="row" justifyContent="center">
        <AdbIcon fontSize="large"></AdbIcon>
        <Typography variant="h5">Robot = {robot}</Typography>
      </Grid>

      <Grid container direction="row" justifyContent="center">
        <Person fontSize="large"></Person>
        <Typography variant="h5" data-testid="player-choice">
          {playerName} = {player}
        </Typography>
      </Grid>
      <Typography variant="h5">Result: {gameResult}</Typography>
    </Container>
  );
};
