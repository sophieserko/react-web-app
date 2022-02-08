import { Choice, Result, VsResult } from "../choice";

export function Paper(choice: String): [VsResult, Result] {
  if (choice === Choice.Rock) {
    return [VsResult.PaperVsRock, Result.PlayerWin];
  }
  if (choice === Choice.Scissors) {
    return [VsResult.ScissorsVsPaper, Result.RobotWin];
  }
  return [VsResult.Tie, Result.Tie];
}
