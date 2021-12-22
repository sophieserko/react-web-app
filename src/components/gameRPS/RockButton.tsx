import { Button, ButtonProps, makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
  rockButton: {
    backgroundColor: "lightblue",
  },
}));
interface Props extends ButtonProps {}

export default function RockButton(_props: Props): ReactElement {
  const classes = useStyles();
  return (
    <Button className={classes.rockButton} {..._props}>
      Rock
    </Button>
  );
}
