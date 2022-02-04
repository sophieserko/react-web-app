import { Choice, Result } from "./choice";
import { Paper } from "./choices/Paper";
import { Rock } from "./choices/Rock";
import { Scissors } from "./choices/Scissors";

export function getResult(
  playerChoiceString: string,
  robotChoiceString: string
): Result {
  var result: Result = Result.Tie;

  switch (playerChoiceString) {
    case Choice.Rock: {
      result = Rock(robotChoiceString);
      break;
    }
    case Choice.Scissors: {
      result = Scissors(robotChoiceString);
      break;
    }
    case Choice.Paper: {
      result = Paper(robotChoiceString);
      break;
    }
  }
  return result;
}
