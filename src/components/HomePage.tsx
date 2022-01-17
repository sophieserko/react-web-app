import { AppBar, Container, makeStyles } from "@material-ui/core";
import React from "react";
import GameArea from "./gameRPS/GameArea";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#329222",
  },
}));
interface Props {}

export const HomePage = (props: Props) => {
  const classes = useStyles();
  return (
    <Container className={classes.background}>
      <GameArea></GameArea>
    </Container>
  );
};
