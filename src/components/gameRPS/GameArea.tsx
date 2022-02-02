import {
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import GameButton from "./GameButton";
import { ScoreTable } from "./ScoreTable";
import { getRobotChoice2 } from "./getRobotChoice";
import { Choice, Result } from "./choice";
import { calculateGameOutcome } from "./calculateGameOutcome";
import {
  tie,
  rockVsScissors,
  youWin,
  paperVsRock,
  robotWin,
  scissorsVsPaper,
} from "./strings";
import { Rock } from "./choices/Rock";
import { Scissors } from "./choices/Scissors";
import { Paper } from "./choices/Paper";
import { GameStateOutput } from "./printOutGameState";

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

    var result: Result = Result.Tie;

    switch (playerChoiceString) {
      case Choice.Rock: {
        result = Rock(robotChoiceString);
        break;
      }
      case Choice.Scissors: {
        result = Scissors(robotChoiceString);
        break;
      }
      case Choice.Paper: {
        result = Paper(robotChoiceString);
        break;
      }
    }

    //var print = GameStateOutput(playerChoiceString, result);
    //setGameResult(print);
  }

  //console.log("log playerChoice just before render " + playerChoice);

  return (
    <Card className={classes.play}>
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

        <GameStateOutput></GameStateOutput>

        <Typography variant="h5">Result: {gameResult}</Typography>
        <ScoreTable
          numberOfGamesPlayed={totalGamesPlayed}
          robotScore={robotScore}
          playerScore={playerScore}
          tieCount={tieCount}
        ></ScoreTable>
      </Grid>
    </Card>
  );
}
