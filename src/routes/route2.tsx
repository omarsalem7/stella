import { useState } from 'react';
import Header from '../shared/header';
import Table from '../shared/table';
import { columnsType } from '../shared/filter.types';
import { columnsB, rowsB } from '../data/routesData';

const Route2 = () => {
  const [filter, setFilter] = useState<columnsType>(columnsB);
  const handleFilters = (data: columnsType) => {
    setFilter(data);
  };

  return (
    <>
      <Header
        filter={filter}
        columns={columnsB}
        handleFilters={handleFilters}
      />
      <Table rows={rowsB} columns={filter} />
    </>
  );
};

export default Route2;
