import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import GameButton from "./GameButton";
import AdbIcon from "@material-ui/icons/Adb";
import { Person } from "@material-ui/icons";
import { ScoreTable } from "./ScoreTable";
import RobotPlayer from "./RobotPlayer";

const useStyles = makeStyles((theme) => ({
  play: {
    //display: "flex",
    justifyContent: "center",
    backgroundColor: "#de8847",
    //flexDirection: "column",
    width: 500,
    //margin: 10,
  },
  titleComponent: {
    color: "#6e1780",
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

export default function GameArea(_props: Props): ReactElement {
  const classes = useStyles();

  const [gameResult, setGameResult] = useState("--click to play--");
  const [playerChoice, setPlayerChoice] = useState("player");
  const [robotChoice, setRobotChoice] = useState<string | undefined>("robot");

  var player1 = "peter";
  let robotPlayer: string | undefined = "";
  const playItems = new Map([
    [1, Choice.Rock],
    [2, Choice.Paper],
    [3, Choice.Scissors],
  ]);
  const min = 1;
  const max = 4;

  function buttonClick(text: string) {
    console.log("Player choice = " + text);
    setPlayerChoice(text);

    const random = Math.floor(min + Math.random() * (max - min));
    robotPlayer = playItems.get(random);
    setRobotChoice(robotPlayer);

    console.log(
      "player 1 is now: " + playerChoice + " and robot: " + robotChoice
    );
    player1 = text;
    playGame();
  }

  const playGame = () => {
    totalGamesPlayed++;
    if (player1 === robotPlayer) {
      setGameResult("TIE");
      return;
    }

    console.log("log player in playGame " + playerChoice);

    switch (player1) {
      case Choice.Rock: {
        if (robotPlayer === Choice.Scissors) {
          setGameResult(rockVsScissors() + youWin());
        } else {
          setGameResult(paperVsRock() + robotWin());
        }
        break;
      }
      case Choice.Scissors: {
        if (robotPlayer === Choice.Paper) {
          setGameResult(scissorsVsPaper() + youWin());
        } else {
          setGameResult(rockVsScissors() + robotWin());
        }
        break;
      }
      case Choice.Paper: {
        if (robotPlayer === Choice.Rock) {
          setGameResult(paperVsRock() + youWin());
        } else {
          setGameResult(scissorsVsPaper() + robotWin());
        }
        break;
      }
    }
  };

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

  console.log("log player just before render " + playerChoice);
  return (
    <Paper className={classes.play}>
      <Container>
        <Typography variant="h4" className={classes.titleComponent}>
          Play the Game
        </Typography>

        <Typography variant="h5">Choose your action</Typography>

        <div className={classes.buttonGroup}>
          <GameButton handleClick={buttonClick} name={Choice.Rock} />
          <GameButton handleClick={buttonClick} name={Choice.Paper} />
          <GameButton handleClick={buttonClick} name={Choice.Scissors} />
        </div>

        <Grid container>
          <Grid item xs={1}>
            <AdbIcon fontSize="large"></AdbIcon>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5">Robot = {robotChoice}</Typography>
          </Grid>

          <Grid item xs={1}>
            <Person fontSize="large"></Person>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5">You = {playerChoice}</Typography>
          </Grid>
        </Grid>

        <Typography variant="h5">Result: {gameResult}</Typography>
        <ScoreTable
          numberOfGamesPlayed={totalGamesPlayed}
          robotScore={robotScore}
          playerScore={playerScore}
        ></ScoreTable>
      </Container>
    </Paper>
  );
}
