import {
  Container,
  createTheme,
  makeStyles,
  MuiThemeProvider,
  Theme,
} from "@material-ui/core";
import React from "react";
import GameArea from "./gameRPS/GameArea";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.info.main,
    padding: 10,
  },
}));

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#F3EEC3",
      dark: "#F7E3AF",
    },
    secondary: {
      main: "#F7AF9D",
      dark: "#C08497",
    },
    info: {
      main: "#B0D0D3",
    },
  },
});
interface Props {}

export const HomePage = (props: Props) => {
  //const myTheme = useTheme();
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={myTheme}>
      <Container className={classes.background}>
        <GameArea></GameArea>
      </Container>
    </MuiThemeProvider>
  );
};
