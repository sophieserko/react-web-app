import React, { ReactElement } from "react";
import PaperButton from "./PaperButton";
import RockButton from "./RockButton";
import ScissorButton from "./ScissorButton";

interface Props {}

export default function GameArea(_props: Props): ReactElement {
  return (
    <div>
      <RockButton />
      <PaperButton />
      <ScissorButton />
    </div>
  );
}
