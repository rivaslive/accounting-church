import dayjs from 'dayjs';

export function formatToDate(
  dateProp: dayjs.ConfigType,
  format = 'D MMM, YYYY',
) {
  const date = dayjs(dateProp);
  if (!date.isValid()) return '';

  return date.locale('es').format(format);
}

// function for formatting currency money
export function formatToMoney(valueProps: number | string | undefined | null) {
  if (valueProps === undefined || valueProps === null) {
    return '-';
  }

  const value = parseFloat(valueProps?.toString?.());

  if (Number.isNaN(value)) return '-';
  if (value < 0) return `$(${value.toFixed(2)})`.replace('-', '');
  return `$${value.toFixed(2)}`;
}
