import { columns } from './data/route1';
export const filterColumns = (values: string[]) =>
  columns.filter((col) => {
    if (values.includes(col.field)) {
      return col;
    }
  });
