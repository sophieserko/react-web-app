import { Button, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
  rockButton: {
    backgroundColor: "blue",
  },
}));
interface Props {}

export default function RockButton(_props: Props): ReactElement {
  const classes = useStyles();
  return <Button className={classes.rockButton}>Rock</Button>;
}
