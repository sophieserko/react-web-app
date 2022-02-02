import { Choice } from "./choice";

const playItems = new Map([
  [1, Choice.Rock],
  [2, Choice.Paper],
  [3, Choice.Scissors],
]);
const min = 1;
const max = 4;

export function getRobotChoice2(): string {
  const random = Math.floor(min + Math.random() * (max - min));
  const stringChoice = playItems.get(random);
  const val = stringChoice ? stringChoice : "help"; //removes undefined type
  return val;
}
