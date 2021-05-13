export function illegalState(name?: string): Error {
  if (name) {
    throw new Error(`Illegal state: ${name}`);
  } else {
    throw new Error('Illegal state');
  }
}
