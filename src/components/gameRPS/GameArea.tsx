import { Container, makeStyles, Typography } from "@material-ui/core";
import React, { FunctionComponent, ReactElement } from "react";
import PaperButton from "./PaperButton";
import RobotPlayer from "./RobotPlayer";
import RockButton from "./RockButton";
import ScissorButton from "./ScissorButton";

const useStyles = makeStyles((theme) => ({
  play: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "pink",
    flexDirection: "column",
    width: "400px",
  },
  titleComponent: {
    color: "purple",
  },
  buttonGroup: {
    justifyContent: "center",
  },
}));
interface Props {}

//const GameArea: FunctionComponent<Props> = () => {
export default function GameArea(_props: Props): ReactElement {
  const classes = useStyles();

  //const onSubmit: SubmitHandler<ColorInputs> = (data) => console.log(data);

  var player1 = "";
  let player2: string | undefined = "";
  const playItems = new Map([
    [1, "rock"],
    [2, "paper"],
    [3, "scissors"],
  ]);
  const min = 1;
  const max = 4;

  function handleClick(choice: string) {
    console.log(choice);
    player1 = choice;
    console.log("player 1 is now: " + player1);
  }

  const handleClick2 = (choice: string) => {
    return (event: React.MouseEvent) => {
      console.log(choice);
      player1 = choice;
      const random = Math.floor(min + Math.random() * (max - min));
      player2 = playItems.get(random);
      console.log("player 1 is now: " + player1 + " = player2 -> " + player2);
      playGame();
    };
  };

  const playGame = () => {
    if (player1 === player2) {
      console.log("TIE");
    } else if (player1 === "rock") {
      if (player2 === "scissors") {
        console.log(player1 + " beats " + player2 + " player1 wins");
      } else {
        console.log(player1 + " - " + player2 + " player2 wins");
      }
    } else if (player1 === "paper") {
      if (player2 === "rock") {
        console.log(player1 + " beats " + player2 + " player1 wins");
      } else {
        console.log(player1 + " - " + player2 + " player2 wins");
      }
    } else if (player1 === "scissors") {
      if (player2 === "paper") {
        console.log(player1 + " beats " + player2 + " player1 wins");
      } else {
        console.log(player1 + " - " + player2 + " player2 wins");
      }
    }
  };

  return (
    <div>
      {}
      <Container className={classes.play}>
        <Typography variant="h5" className={classes.titleComponent}>
          Play the Game
        </Typography>
        <RobotPlayer player2={player2} />
        <div className={classes.buttonGroup}>
          <RockButton onClick={handleClick2("rock")} />
          <PaperButton onClick={handleClick2("paper")} />
          <ScissorButton
            handleScissorButtonClick={() => handleClick2("scissors")}
            name="hello"
          />
        </div>
      </Container>
    </div>
  );
} //refactor
