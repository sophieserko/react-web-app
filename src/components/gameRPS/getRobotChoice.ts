import { Choice } from "./choice";

const playItems = new Map([
  [1, Choice.Rock],
  [2, Choice.Paper],
  [3, Choice.Scissors],
]);
const min = 1;
const max = 4;

export function getRobotChoice(): string | undefined {
  const random = Math.floor(min + Math.random() * (max - min));
  return playItems.get(random);
}
