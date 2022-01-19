import {
  Container,
  createTheme,
  makeStyles,
  MuiThemeProvider,
  Theme,
  useTheme,
} from "@material-ui/core";
import React from "react";
import GameArea from "./gameRPS/GameArea";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    //backgroundColor: theme.palette.info.main,
  },
}));

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#383b53",
      dark: "#32213a",
      light: "#66717e",
    },
    secondary: {
      main: "#d6ffb7",
    },
    info: {
      main: "#f78764",
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
