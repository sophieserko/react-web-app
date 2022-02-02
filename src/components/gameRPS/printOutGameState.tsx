import { Choice, Result } from "./choice";
import AdbIcon from "@material-ui/icons/Adb";
import { Person } from "@material-ui/icons";

// export function printOutGameState(choice: string, result: Result): string {

//   return "";
// }

import React, { ReactElement } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

interface Props {}

export const GameStateOutput = (_props: Props) => {
  return (
    <Container>
      <Grid container direction="row" justifyContent="center">
        <AdbIcon fontSize="large"></AdbIcon>
        {/* <Typography variant="h5">Robot = {gameState.robotChoice}</Typography> */}
      </Grid>

      <Grid container direction="row" justifyContent="center">
        <Person fontSize="large"></Person>
        {/* <Typography variant="h5" data-testid="player-choice">
          {playerName} = {gameState.playerChoice}
        </Typography> */}
      </Grid>
    </Container>
  );
};
