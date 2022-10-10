import { columns } from './data/route1';
import { columnsType } from './shared/filter.types';

export const filterColumns = (values: string[]) =>
  columns.filter((col) => {
    if (values.includes(col.field)) {
      return col;
    }
  });

export const arrayRotate = (arr: columnsType, reverse = false) => {
  if (reverse) arr.unshift(arr.pop()!);
  else arr.push(arr.shift()!);
  return arr;
};
