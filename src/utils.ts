import { columns } from './data/route1';
export const filterColumns = (values: string[]) =>
  columns.filter((col) => {
    // console.log('myvalues', values);
    if (values.includes(col.field)) {
    //   console.log('print', col);
      return col;
    }
  });
