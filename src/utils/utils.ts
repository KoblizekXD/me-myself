
export function randomFrom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export const colors = ['blue', 'green', 'violet', 'yellow', 'red'];

export function randomColor() {
  return 'text-' + randomFrom(colors) + '-400';
}

export const commandHandler = (command: string, commandHistory: string[]): {result: string, history: string[]} => {
  if (command === 'clear') {
    return {result: '', history: []};
  }

  return {result: 'Unknown command', history: commandHistory};
}