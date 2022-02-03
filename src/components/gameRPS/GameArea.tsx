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
import { getRobotChoice } from "./getRobotChoice";
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
import { GameStateOutput } from "./GameStateOutput";

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

  const [gameResult, setGameResult] = useState("--click to play--");
  const [playerChoice, setPlayerChoice] = useState(" - ");
  const [robotChoice, setRobotChoice] = useState<string>(" - ");
  const [playerName, setPlayerName] = useState("Player");

  const [robotScore, setRobotScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [tieCount, setTieCount] = useState(0);
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(0); //can these be exported?

  function buttonClick(text: string) {
    console.log("rerender");
    setTotalGamesPlayed(totalGamesPlayed + 1);

    const playerChoiceString = text;
    const robotChoiceString = getRobotChoice();

    setPlayerChoice(playerChoiceString);
    setRobotChoice(robotChoiceString);

    // console.log(
    //   "playerChoice is now: " +
    //     playerChoice +
    //     " and robotChoice: " +
    //     robotChoice
    // );

    //calculateGameOutcome(playerChoiceString, robotChoiceString);

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
    setGameResult(result);

    if (result === Result.PlayerWin) {
      setPlayerScore(playerScore + 1);
    } else if (result === Result.RobotWin) {
      setRobotScore(robotScore + 1);
    } else {
      setTieCount(tieCount + 1);
    }
  }

  //console.log("log playerChoice just before render " + playerChoice);
  console.log("rerender22");
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

        <GameStateOutput
          robot={robotChoice}
          player={playerChoice}
          playerName={playerName}
          gameResult={gameResult}
        />

        <ScoreTable
          numberOfGamesPlayed={totalGamesPlayed}
          robotScore={robotScore}
          playerScore={playerScore}
          tieCount={tieCount}
        />
      </Grid>
    </Card>
  );
}
