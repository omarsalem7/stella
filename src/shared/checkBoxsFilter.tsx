import React from 'react';

type CheckBoxsProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  columns: {
    headerName: string;
    field: string;
  }[];
};

const CheckBoxsFilter = ({ handleChange, columns }: CheckBoxsProps) => {
  return (
    <div>
      {columns.map(({ headerName }) => (
        <div key={headerName}>
          <input
            type="checkbox"
            name={headerName}
            onChange={handleChange}
            id={`checkbox_${headerName}`}
            value={headerName}
          />
          <label htmlFor={`checkbox_${headerName}`}>{headerName}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxsFilter;
