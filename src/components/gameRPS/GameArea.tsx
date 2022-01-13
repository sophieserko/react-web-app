import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import GameButton from "./GameButton";
import AdbIcon from "@material-ui/icons/Adb";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  play: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#de8847",
    flexDirection: "column",
    width: 500,
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

//const GameArea: FunctionComponent<Props> = () => {
export default function GameArea(_props: Props): ReactElement {
  const classes = useStyles();

  const [gameResult, setGameResult] = useState("--click to play--");
  const [playerChoice, setPlayerChoice] = useState("player");
  const [robotChoice, setRobotChoice] = useState<string | undefined>("robot");

  //const onSubmit: SubmitHandler<ColorInputs> = (data) => console.log(data);

  var player1 = "peter";
  let robotPlayer: string | undefined = "";
  const playItems = new Map([
    [1, "rock"],
    [2, "paper"],
    [3, "scissors"],
  ]);
  const min = 1;
  const max = 4;

  function buttonClick(text: string) {
    console.log("Player choice = " + text);
    setPlayerChoice(text);
    console.log("after setplayerchoice=======" + playerChoice);

    const random = Math.floor(min + Math.random() * (max - min));
    robotPlayer = playItems.get(random);
    setRobotChoice(robotPlayer);

    console.log("player 1 is now: " + text + " and robot: " + robotPlayer);
    player1 = text;
    playGame();
  }

  // const playGame = () => {
  //   if (player1 === robotPlayer) {
  //     setGameResult("TIE");
  //   } else if (player1 === "rock") {
  //     if (robotPlayer === "scissors") {
  //       setGameResult(player1 + " beats " + robotPlayer + " player1 wins");
  //     } else {
  //       setGameResult(player1 + " - " + robotPlayer + " robotPlayer wins");
  //     }
  //   } else if (player1 === "paper") {
  //     if (robotPlayer === "rock") {
  //       setGameResult(player1 + " beats " + robotPlayer + " player1 wins");
  //     } else {
  //       setGameResult(player1 + " - " + robotPlayer + " robotPlayer wins");
  //     }
  //   } else if (player1 === "scissors") {
  //     if (robotPlayer === "paper") {
  //       setGameResult(player1 + " beats " + robotPlayer + " player1 wins");
  //     } else {
  //       setGameResult(player1 + " - " + robotPlayer + " robotPlayer wins");
  //     }
  //   }
  // };
  const playGame = () => {
    switch (player1) {
      case "rock": {
        if (robotPlayer === "rock") {
          setGameResult("TIE");
        } else if (robotPlayer === "scissors") {
          setGameResult(player1 + " breaks " + robotPlayer + " -- you win!!");
        } else {
          setGameResult(
            player1 + " gets wrapped by " + robotPlayer + " -- robot wins"
          );
        }
        break;
      }
      case "scissors": {
        if (robotPlayer === "scissors") {
          setGameResult("TIE");
        } else if (robotPlayer === "paper") {
          setGameResult(player1 + " cuts " + robotPlayer + " -- you win!!");
        } else {
          setGameResult(
            player1 + " are broken by " + robotPlayer + " -- robot wins"
          );
        }
        break;
      }
      case "paper": {
        if (robotPlayer === "paper") {
          setGameResult("TIE");
        } else if (robotPlayer === "rock") {
          setGameResult(player1 + " wraps " + robotPlayer + " -- you win!!");
        } else {
          setGameResult(
            player1 + " is cut by " + robotPlayer + " -- robot wins"
          );
        }
        break;
      }
    }
  };

  return (
    <div>
      {}
      <Container className={classes.play}>
        <Typography variant="h4" className={classes.titleComponent}>
          Play the Game
        </Typography>

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

        <Typography variant="h5">Choose your action</Typography>

        <div className={classes.buttonGroup}>
          <GameButton handleClick={buttonClick} name="rock" />
          <GameButton handleClick={buttonClick} name="paper" />
          <GameButton handleClick={buttonClick} name="scissors" />
        </div>
        <Typography variant="h5">Result: {gameResult}</Typography>
      </Container>
    </div>
  );
}
