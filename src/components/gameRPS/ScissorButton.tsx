import { Button, ButtonProps } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props extends ButtonProps {
  handleScissorButtonClick: () => void;
  name: string;
}

export default function ScissorButton({
  handleScissorButtonClick,
}: Props): ReactElement {
  return <Button onClick={handleScissorButtonClick}>Scissors</Button>;
}
