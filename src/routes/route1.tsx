import { useState } from 'react';
import Header from '../shared/header';
import Table from '../shared/table';
import { columnsType } from '../shared/filter.types';
import { columns } from '../data/route1';

const Route1 = () => {
  const [filter, setFilter] = useState<columnsType>(columns);
  const handleFilters = (data: columnsType) => {
    setFilter(data);
  };

  return (
    <>
      <Header handleFilters={handleFilters} />
      <Table columns={filter} />
    </>
  );
};

export default Route1;
