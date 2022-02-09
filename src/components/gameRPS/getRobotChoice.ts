import { Choice } from "./choice";

const playItems = new Map([
  [1, Choice.Rock],
  [2, Choice.Paper],
  [3, Choice.Scissors],
  [4, Choice.Lizard],
  [5, Choice.Spock],
]);
const min = 1;
const max = 6;

export function getRobotChoice(): string {
  const random = Math.floor(min + Math.random() * (max - min));
  const stringChoice = playItems.get(random);
  return stringChoice !== undefined ? stringChoice : "help"; //removes undefined type
}
