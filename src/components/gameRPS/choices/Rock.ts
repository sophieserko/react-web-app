import { Choice, Result } from "../choice";

export function Rock(choice: String): Result {
  if (choice === Choice.Scissors) {
    return Result.PlayerWin;
  }
  if (choice === Choice.Paper) {
    return Result.RobotWin;
  }
  return Result.Tie;
}
