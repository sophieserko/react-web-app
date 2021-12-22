import { makeStyles, Typography } from "@material-ui/core";
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
  },
  titleComponent: {
    color: "purple",
  },
}));
interface Props {}

//const GameArea: FunctionComponent<Props> = () => {
export default function GameArea(_props: Props): ReactElement {
  const classes = useStyles();

  //const onSubmit: SubmitHandler<ColorInputs> = (data) => console.log(data);

  var player1 = "";

  function handleClick(choice: string) {
    console.log(choice);
    player1 = choice;
    console.log("player 1 is now: " + player1);
  }

  const handleClick2 = (choice: string) => {
    return (event: React.MouseEvent) => {
      console.log(choice);
      player1 = choice;
      console.log("player 1 is now: " + player1);
    };
  };
  return (
    <div className={classes.play}>
      {}
      <Typography variant="h5" className={classes.titleComponent}>
        Play the Game
      </Typography>
      <RobotPlayer />
      <div>
        <RockButton onClick={handleClick2("rock")} />
        <PaperButton onClick={handleClick2("paper")} />
        <ScissorButton onClick={handleClick2("scissors")} />
      </div>
    </div>
  );
}
