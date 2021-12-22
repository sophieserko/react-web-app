import { Typography } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props {}

const playItems = new Map([
  [1, "rock"],
  [2, "paper"],
  [3, "scissors"],
]);
const min = 1;
const max = 4;
export default function RobotPlayer({}: Props): ReactElement {
  const random = Math.floor(min + Math.random() * (max - min));
  return (
    <div>
      <Typography>
        2nd Player {random} {playItems.get(random)}
      </Typography>
    </div>
  );
}
