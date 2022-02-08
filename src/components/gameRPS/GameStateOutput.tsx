import AdbIcon from "@material-ui/icons/Adb";
import { Person } from "@material-ui/icons";
import { Container, Grid, Typography } from "@material-ui/core";

interface Props {
  robot: string;
  player: string;
  playerName: string;
  gameResult: string;
  winner: string;
}

export const GameStateOutput = ({
  robot,
  player,
  playerName,
  gameResult,
  winner,
}: Props) => {
  return (
    <Container style={{ padding: 10 }}>
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
      <Grid
        container
        direction="column"
        //justifyContent="center"
        alignItems="center"
        style={{ padding: 10 }}
      >
        <Grid item>
          <Typography variant="h5">Result: {gameResult}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{winner}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
