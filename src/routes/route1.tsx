import { useState } from 'react';
import Header from '../shared/header';
import Table from '../shared/table';
import { columnsType } from '../shared/filter.types';
import { columnsA, rowsA } from '../data/routesData';

const Route1 = () => {
  const [filter, setFilter] = useState<columnsType>(columnsA);
  const handleFilters = (data: columnsType) => {
    setFilter(data);
  };

  return (
    <>
      <Header
        filter={filter}
        columns={columnsA}
        handleFilters={handleFilters}
      />
      <Table rows={rowsA} columns={filter} />
    </>
  );
};

export default Route1;
