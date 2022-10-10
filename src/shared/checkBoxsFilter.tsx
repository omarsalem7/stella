import React from 'react';

type CheckBoxsProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  columns: {
    field: string;
  }[];
};

const CheckBoxsFilter = ({ handleChange, columns }: CheckBoxsProps) => {
  console.log(columns);
  return (
    <div>
      {columns.map(({ field }) => (
        <div key={field}>
          <input
            type="checkbox"
            name={field}
            onChange={handleChange}
            id={`checkbox_${field}`}
            value={field}
          />
          <label htmlFor={`checkbox_${field}`}>{field}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxsFilter;
