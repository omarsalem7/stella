import React, { useState } from 'react';

type CheckBoxsProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  columns: {
    field: string;
  }[];
};

const CheckBoxsFilter = ({ handleChange, columns }: CheckBoxsProps) => {
  return (
    <>
      {columns.map(({ field }) => (
        <div key={field}>
          <input
            type="checkbox"
            name="checkbox_name"
            onChange={handleChange}
            id={`checkbox_${field}`}
            value={field}
          />
          <label htmlFor={`checkbox_${field}`}>{field}</label>
        </div>
      ))}
    </>
  );
};

export default CheckBoxsFilter;
