import { Button, ButtonProps } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props extends ButtonProps {}

export default function ScissorButton(_props: Props): ReactElement {
  return <Button {..._props}>Scissors</Button>;
}
