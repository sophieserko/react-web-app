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
import { getRobotChoice2 } from "./getRobotChoice";
import { Choice } from "./choice";
import { calculateGameOutcome } from "./calculateGameOutcome";
import {
  tie,
  rockVsScissors,
  youWin,
  paperVsRock,
  robotWin,
  scissorsVsPaper,
} from "./strings";

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

export default function GameArea(_props: Props): ReactElement {
  const classes = useStyles();

  const [gameState, setGameState] = useState({
    playerChoice: " - ",
    robotChoice: " - ",
    result: "--click to play--",
  });

  const [gameResult, setGameResult] = useState("--click to play--");
  //const [playerChoice, setPlayerChoice] = useState(" - ");
  //const [robotChoice, setRobotChoice] = useState<string | undefined>(" - ");
  const [playerName, setPlayerName] = useState("Player");

  const [robotScore, setRobotScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [tieCount, setTieCount] = useState(0);
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(0); //can these be exported?

  function buttonClick(text: string) {
    setTotalGamesPlayed(totalGamesPlayed + 1);

    const playerChoiceString = text;
    const robotChoiceString = getRobotChoice2();

    setGameState((previousState) => {
      return {
        ...previousState,
        playerChoice: playerChoiceString,
        robotChoice: robotChoiceString,
      };
    });

    // console.log(
    //   "playerChoice is now: " +
    //     playerChoice +
    //     " and robotChoice: " +
    //     robotChoice
    // );

    calculateGameOutcome(playerChoiceString, robotChoiceString);

    if (playerChoiceString === robotChoiceString) {
      setGameResult(tie());
      setTieCount(tieCount + 1);
      return;
    }

    switch (playerChoiceString) {
      case Choice.Rock: {
        if (robotChoiceString === Choice.Scissors) {
          setPlayerScore(playerScore + 1);
          setGameResult(rockVsScissors() + youWin());
        } else {
          setRobotScore(robotScore + 1);
          setGameResult(paperVsRock() + robotWin());
        }
        break;
      }
      case Choice.Scissors: {
        if (robotChoiceString === Choice.Paper) {
          setPlayerScore(playerScore + 1);
          setGameResult(scissorsVsPaper() + youWin());
        } else {
          setRobotScore(robotScore + 1);
          setGameResult(rockVsScissors() + robotWin());
        }
        break;
      }
      case Choice.Paper: {
        if (robotChoiceString === Choice.Rock) {
          setPlayerScore(playerScore + 1);
          setGameResult(paperVsRock() + youWin());
        } else {
          setRobotScore(robotScore + 1);
          setGameResult(scissorsVsPaper() + robotWin());
        }
        break;
      }
    }
  }

  //console.log("log playerChoice just before render " + playerChoice);

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
          <Typography variant="h5">Robot = {gameState.robotChoice}</Typography>
        </Grid>

        <Grid container direction="row" justifyContent="center">
          <Person fontSize="large"></Person>
          <Typography variant="h5" data-testid="player-choice">
            {playerName} = {gameState.playerChoice}
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
