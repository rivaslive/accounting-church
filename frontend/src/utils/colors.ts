export function getColorForAmount(amount: number) {
  if (amount === 0) return 'text';
  if (amount < 0) return 'error.main';
  if (amount > 0) return 'success.main';
  return 'text';
}
