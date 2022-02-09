import { Choice, Result, VsResult } from "../choice";

export function Spock(choice: String): [VsResult, Result] {
  if (choice === Choice.Paper) {
    return [VsResult.PaperVsSpock, Result.RobotWin];
  }
  if (choice === Choice.Rock) {
    return [VsResult.SpockVsRock, Result.PlayerWin];
  }
  if (choice === Choice.Scissors) {
    return [VsResult.SpockVsScissors, Result.PlayerWin];
  }
  if (choice === Choice.Lizard) {
    return [VsResult.LizardVsSpock, Result.RobotWin];
  }
  return [VsResult.Tie, Result.Tie];
}
