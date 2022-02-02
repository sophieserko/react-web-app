import { Choice, Result } from "../choice";

export function Scissors(choice: String): Result {
  if (choice === Choice.Paper) {
    return Result.PlayerWin;
  }
  if (choice === Choice.Rock) {
    return Result.RobotWin;
  }
  return Result.Tie;
}
