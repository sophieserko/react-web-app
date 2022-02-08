import { Choice, Result, VsResult } from "../choice";

export function Rock(choice: String): [VsResult, Result] {
  if (choice === Choice.Scissors) {
    return [VsResult.RockVsScissors, Result.PlayerWin];
  }
  if (choice === Choice.Paper) {
    return [VsResult.PaperVsRock, Result.RobotWin];
  }
  if (choice === Choice.Lizard) {
    return [VsResult.RockVsLizard, Result.PlayerWin];
  }
  if (choice === Choice.Spock) {
    return [VsResult.SpockVsRock, Result.RobotWin];
  }
  return [VsResult.Tie, Result.Tie];
}
