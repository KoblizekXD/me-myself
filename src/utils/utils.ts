
export function randomFrom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export const colors = ['blue', 'green', 'violet', 'yellow', 'red'];

export function randomColor() {
  return 'text-' + randomFrom(colors) + '-400';
}