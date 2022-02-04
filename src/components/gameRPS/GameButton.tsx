import { Button, ButtonProps, makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.secondary.dark,
    margin: "10px",
  },
}));
interface Props extends ButtonProps {
  handleClick: (text: string) => void;
  name: string;
}

export default function GameButton(_props: Props): ReactElement {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      size="large"
      data-testid={_props.name + "Button"}
      onClick={() => _props.handleClick(_props.name)}
    >
      {_props.name}
    </Button>
  );
}
