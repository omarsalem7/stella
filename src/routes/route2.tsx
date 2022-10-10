import { useState, useEffect } from 'react';
import Header from '../shared/header';
import Table from '../shared/table';
import { columnsType } from '../shared/filter.types';
import { columns, rows } from '../data/route1';

const Route2 = () => {
  const [filter, setFilter] = useState<columnsType>(columns);
  const handleFilters = (data: columnsType) => {
    setFilter(data);
  };

  return (
    <>
      {/* <Header handleFilters={handleFilters} showData={filter} /> */}
      <Header filter={filter} handleFilters={handleFilters} />
      <Table rows={rows} columns={filter} />
    </>
  );
};

export default Route2;
