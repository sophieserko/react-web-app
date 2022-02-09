import { Choice, Result, VsResult } from "../choice";

export function Scissors(choice: String): [VsResult, Result] {
  if (choice === Choice.Paper) {
    return [VsResult.ScissorsVsPaper, Result.PlayerWin];
  }
  if (choice === Choice.Rock) {
    return [VsResult.RockVsScissors, Result.RobotWin];
  }
  if (choice === Choice.Lizard) {
    return [VsResult.ScissorsVsLizard, Result.PlayerWin];
  }
  if (choice === Choice.Spock) {
    return [VsResult.SpockVsScissors, Result.RobotWin];
  }
  return [VsResult.Tie, Result.Tie];
}
