import { Choice, Result, VsResult } from "./choice";
import { Paper } from "./choices/Paper";
import { Rock } from "./choices/Rock";
import { Scissors } from "./choices/Scissors";

export function getResult(
  playerChoiceString: string,
  robotChoiceString: string
): [VsResult, Result] {
  var vsResult: VsResult = VsResult.Tie;
  var result: Result = Result.Tie;

  switch (playerChoiceString) {
    case Choice.Rock: {
      [vsResult, result] = Rock(robotChoiceString);
      break;
    }
    case Choice.Scissors: {
      [vsResult, result] = Scissors(robotChoiceString);
      break;
    }
    case Choice.Paper: {
      [vsResult, result] = Paper(robotChoiceString);
      break;
    }
  }
  return [vsResult, result];
}
