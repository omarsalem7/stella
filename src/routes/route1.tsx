import { useState } from 'react';
import Header from '../shared/header';
import Table from '../shared/table';
import { columns } from '../data/route1';

const Route1 = () => {
  const [filter, setFilter] = useState(columns);
  const result = filter.filter((col) => col.field !== 'A1');

  return (
    <>
      <Header />
      <Table columns={result} />
    </>
  );
};

export default Route1;
