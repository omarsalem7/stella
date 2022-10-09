import { FilterInputProps } from './filter.types';

const CheckBoxsFilter = ({ columns }: FilterInputProps) => {
  return (
    <>
      {columns.map(({ field }) => (
        <div key={field}>
          <input
            type="checkbox"
            name="checkbox"
            id={`checkbox_${field}`}
            value="value"
          />
          <label htmlFor={`checkbox_${field}`}>{field}</label>
        </div>
      ))}
    </>
  );
};

export default CheckBoxsFilter;
