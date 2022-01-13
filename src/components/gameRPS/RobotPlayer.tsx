import { Typography } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props {
  player2: string;
  setRobotPlayer: string;
}

const playItems = new Map([
  [1, "rock"],
  [2, "paper"],
  [3, "scissors"],
]);
const min = 1;
const max = 4;
export default function RobotPlayer({ player2 }: Props): ReactElement {
  const random = Math.floor(min + Math.random() * (max - min));
  //player2 = playItems.get(random);
  return (
    <div>
      <Typography>
        2nd Player {random} {playItems.get(random)}
      </Typography>
    </div>
  );
}
