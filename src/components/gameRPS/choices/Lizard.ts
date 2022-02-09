import { Choice, Result, VsResult } from "../choice";

export function Lizard(choice: String): [VsResult, Result] {
  if (choice === Choice.Paper) {
    return [VsResult.LizardVsPaper, Result.PlayerWin];
  }
  if (choice === Choice.Rock) {
    return [VsResult.RockVsLizard, Result.RobotWin];
  }
  if (choice === Choice.Scissors) {
    return [VsResult.ScissorsVsLizard, Result.RobotWin];
  }
  if (choice === Choice.Spock) {
    return [VsResult.LizardVsSpock, Result.PlayerWin];
  }
  return [VsResult.Tie, Result.Tie];
}
