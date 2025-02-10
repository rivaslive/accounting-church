import path from 'path';
import fs from 'fs';
import dayjs from 'dayjs';
import esEs from 'dayjs/locale/es';

dayjs.locale(esEs);

export function findPackageJsonDir(startPath = __dirname) {
  let currentDir = startPath;

  while (true) {
    const packagePath = path.join(currentDir, 'package.json');

    if (fs.existsSync(packagePath)) {
      return currentDir;
    }

    const parentDir = path.dirname(currentDir);
    if (currentDir === parentDir) {
      throw new Error(
        'No se encontró un package.json en el árbol de directorios.',
      );
    }

    currentDir = parentDir;
  }
}

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

export function calcHeight(...arg: number[]) {
  return arg.reduce((acc, curr) => acc + (curr ?? 0), 0);
}
