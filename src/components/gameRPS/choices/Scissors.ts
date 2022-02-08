import { Choice, Result, VsResult } from "../choice";

export function Scissors(choice: String): [VsResult, Result] {
  if (choice === Choice.Paper) {
    return [VsResult.ScissorsVsPaper, Result.PlayerWin];
  }
  if (choice === Choice.Rock) {
    return [VsResult.RockVsScissors, Result.RobotWin];
  }
  return [VsResult.Tie, Result.Tie];
}
