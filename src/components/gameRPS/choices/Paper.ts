import { Choice, Result } from "../choice";

export function Paper(choice: String): Result {
  if (choice === Choice.Rock) {
    return Result.PlayerWin;
  }
  if (choice === Choice.Scissors) {
    return Result.RobotWin;
  }
  return Result.Tie;
}
