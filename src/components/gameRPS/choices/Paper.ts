import { Choice, Result, VsResult } from "../choice";

export function Paper(choice: String): [VsResult, Result] {
  if (choice === Choice.Rock) {
    return [VsResult.PaperVsRock, Result.PlayerWin];
  }
  if (choice === Choice.Scissors) {
    return [VsResult.ScissorsVsPaper, Result.RobotWin];
  }
  if (choice === Choice.Lizard) {
    return [VsResult.LizardVsPaper, Result.RobotWin];
  }
  if (choice === Choice.Spock) {
    return [VsResult.PaperVsSpock, Result.PlayerWin];
  }
  return [VsResult.Tie, Result.Tie];
}
