import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import GameButton from "./GameButton";
import AdbIcon from "@material-ui/icons/Adb";
import { Person } from "@material-ui/icons";
import { ScoreTable } from "./ScoreTable";

const useStyles = makeStyles((theme) => ({
  play: {
    backgroundColor: theme.palette.secondary.light,
    margin: 10,
    padding: 20,
  },
  titleComponent: {
    color: theme.palette.primary.dark,
  },
  buttonGroup: {
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
}));
interface Props {}

export enum Choice {
  Rock = "ROCK",
  Paper = "PAPER",
  Scissors = "SCISSORS",
}

var robotScore = 0;
var playerScore = 0;
var totalGamesPlayed = 0;
var tieCount = 0;

export default function GameArea(_props: Props): ReactElement {
  const classes = useStyles();

  const [gameResult, setGameResult] = useState("--click to play--");
  const [playerChoice, setPlayerChoice] = useState(" - ");
  const [robotChoice, setRobotChoice] = useState<string | undefined>(" - ");
  const [playerName, setPlayerName] = useState("Player");

  const playItems = new Map([
    [1, Choice.Rock],
    [2, Choice.Paper],
    [3, Choice.Scissors],
  ]);
  const min = 1;
  const max = 4;

  function buttonClick(text: string) {
    totalGamesPlayed++;

    const playerChoiceString = text;
    setPlayerChoice(text);

    const robotChoiceString = getRobotChoice();
    setRobotChoice(robotChoiceString);

    console.log(
      "playerChoice is now: " +
        playerChoice +
        " and robotChoice: " +
        robotChoice
    );

    if (playerChoiceString === robotChoiceString) {
      setGameResult(tie());
      return;
    }

    switch (playerChoiceString) {
      case Choice.Rock: {
        if (robotChoiceString === Choice.Scissors) {
          setGameResult(rockVsScissors() + youWin());
        } else {
          setGameResult(paperVsRock() + robotWin());
        }
        break;
      }
      case Choice.Scissors: {
        if (robotChoiceString === Choice.Paper) {
          setGameResult(scissorsVsPaper() + youWin());
        } else {
          setGameResult(rockVsScissors() + robotWin());
        }
        break;
      }
      case Choice.Paper: {
        if (robotChoiceString === Choice.Rock) {
          setGameResult(paperVsRock() + youWin());
        } else {
          setGameResult(scissorsVsPaper() + robotWin());
        }
        break;
      }
    }
  }

  function getRobotChoice(): string | undefined {
    const random = Math.floor(min + Math.random() * (max - min));
    return playItems.get(random);
  }

  function rockVsScissors(): String {
    return " rock breaks scissors ";
  }

  function scissorsVsPaper(): String {
    return " scissors cuts paper ";
  }

  function paperVsRock(): String {
    return " paper wraps rock ";
  }

  function youWin(): string {
    playerScore++;
    return " you win!!";
  }

  function robotWin(): string {
    robotScore++;
    return " Robot wins";
  }

  function tie(): string {
    tieCount++;
    return " Its a Tie";
  }

  console.log("log playerChoice just before render " + playerChoice);

  return (
    <Paper className={classes.play}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" className={classes.titleComponent}>
          Play the Game
        </Typography>

        <TextField
          id="playerName"
          label="Player Name"
          variant="outlined"
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
        />

        <Typography variant="h5">Choose your action</Typography>

        <div className={classes.buttonGroup}>
          <GameButton handleClick={buttonClick} name={Choice.Rock} />
          <GameButton handleClick={buttonClick} name={Choice.Paper} />
          <GameButton handleClick={buttonClick} name={Choice.Scissors} />
        </div>

        <Grid container direction="row" justifyContent="center">
          <AdbIcon fontSize="large"></AdbIcon>
          <Typography variant="h5">Robot = {robotChoice}</Typography>
        </Grid>

        <Grid container direction="row" justifyContent="center">
          <Person fontSize="large"></Person>
          <Typography variant="h5" data-testid="player-choice">
            {playerName} = {playerChoice}
          </Typography>
        </Grid>

        <Typography variant="h5">Result: {gameResult}</Typography>
        <ScoreTable
          numberOfGamesPlayed={totalGamesPlayed}
          robotScore={robotScore}
          playerScore={playerScore}
          tieCount={tieCount}
        ></ScoreTable>
      </Grid>
    </Paper>
  );
}
