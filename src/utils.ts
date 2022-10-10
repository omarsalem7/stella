import { columnsType } from './shared/filter.types';

export const filterColumns = (arr: columnsType, values: string[]) =>
  arr.filter((col) => {
    if (values.includes(col.headerName)) {
      return col;
    }
  });

export const arrayRotate = (arr: columnsType, reverse = false) => {
  if (reverse) arr.unshift(arr.pop()!);
  else arr.push(arr.shift()!);
  return arr;
};
