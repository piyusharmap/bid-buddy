export function formatToDollars(cents: number) {
  return `${(cents / 100).toFixed(2)}`;
}
